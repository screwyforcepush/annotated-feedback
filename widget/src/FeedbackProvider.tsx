/**
 * Universal Feedback Provider Component
 *
 * Top-level wrapper that manages feedback widget lifecycle across any React/Next.js application.
 * Provides environment gating, router integration, hotkey shortcuts, and metadata enrichment.
 *
 * Architecture:
 * - Singleton ConvexReactClient for persistent backend connection
 * - Router integration via usePathname (Next.js) with React Router fallback support
 * - Hotkey listener with customizable shortcuts (default: Alt+F)
 * - Dynamic metadata gathering via getContext callback
 * - Environment gating to disable in production
 *
 * Specification Reference: universal-feedback-mcp-specification.md Appendix B
 *
 * @example Next.js App Router
 * ```tsx
 * // app/layout.tsx
 * <FeedbackProvider
 *   convexUrl={process.env.NEXT_PUBLIC_CONVEX_URL!}
 *   project="acme-webapp"
 *   enabled={process.env.NODE_ENV !== 'production'}
 *   hotkey="Alt+F"
 *   getContext={() => ({
 *     releaseId: process.env.NEXT_PUBLIC_RELEASE_ID,
 *     env: process.env.NEXT_PUBLIC_ENV,
 *     flags: getActiveFeatureFlags(),
 *   })}
 * >
 *   {children}
 * </FeedbackProvider>
 * ```
 */

import { useEffect, useMemo, useState } from 'react';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { FeedbackOverlayManager } from './FeedbackOverlayManager';
import type { FeedbackProviderProps, FeedbackMetadata } from './types';

// Singleton ConvexClient instance to prevent multiple WebSocket connections
let singletonConvexClient: ConvexReactClient | null = null;

/**
 * Get or create singleton ConvexReactClient
 * Ensures only one WebSocket connection exists across app lifecycle
 */
function getConvexClient(convexUrl: string): ConvexReactClient {
  if (!singletonConvexClient) {
    singletonConvexClient = new ConvexReactClient(convexUrl);
  }
  return singletonConvexClient;
}

let cachedUsePathname: (() => string) | null | undefined;

function resolveUsePathname(): (() => string) | null {
  if (cachedUsePathname !== undefined) {
    return cachedUsePathname ?? null;
  }

  try {
    const navigation = require('next/navigation');
    cachedUsePathname = navigation?.usePathname ?? navigation?.default?.usePathname ?? null;
  } catch {
    cachedUsePathname = null;
  }

  return cachedUsePathname ?? null;
}

/**
 * Router integration hook
 * Attempts to use Next.js usePathname, falls back to window.location.pathname
 */
function useRoute(): string {
  const usePathnameHook = resolveUsePathname();
  if (usePathnameHook) {
    const pathname = usePathnameHook();
    if (pathname) {
      return pathname;
    }
  }

  const [route, setRoute] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : ''
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    };

    handleRouteChange();

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return route;
}

/**
 * Parse hotkey string into key combination
 * Supports format: "Alt+F", "Ctrl+Shift+K", etc.
 */
function parseHotkey(hotkey: string): { altKey?: boolean; ctrlKey?: boolean; shiftKey?: boolean; key: string } {
  const parts = hotkey.split('+').map((p) => p.trim());
  const key = (parts[parts.length - 1] || '').toLowerCase();

  return {
    altKey: parts.some((p) => p.toLowerCase() === 'alt'),
    ctrlKey: parts.some((p) => p.toLowerCase() === 'ctrl'),
    shiftKey: parts.some((p) => p.toLowerCase() === 'shift'),
    key,
  };
}

/**
 * FeedbackProvider Component
 *
 * Wraps your application to provide feedback widget functionality.
 * Handles hotkey shortcuts, metadata gathering, and environment gating.
 *
 * @param props - FeedbackProviderProps
 * @returns React component wrapping children with feedback functionality
 */
export function FeedbackProvider({
  convexUrl,
  project,
  enabled,
  hotkey = 'Alt+F',
  showButton = false,
  getContext,
  children,
}: FeedbackProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const route = useRoute();

  // Warn if convexUrl is missing
  useEffect(() => {
    if (!convexUrl) {
      console.warn('[FeedbackWidget] convexUrl not provided - widget will not function correctly');
    }
  }, [convexUrl]);

  // Hotkey listener with cleanup
  useEffect(() => {
    if (!enabled) return;

    const hotkeyConfig = parseHotkey(hotkey);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if all modifier keys match
      const modifiersMatch =
        (hotkeyConfig.altKey ? e.altKey : !e.altKey) &&
        (hotkeyConfig.ctrlKey ? e.ctrlKey : !e.ctrlKey) &&
        (hotkeyConfig.shiftKey ? e.shiftKey : !e.shiftKey);

      // Check if key matches
      const keyMatches = e.key.toLowerCase() === hotkeyConfig.key;

      if (modifiersMatch && keyMatches) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enabled, hotkey]);

  // Get singleton Convex client (memoized to prevent recreation)
  const convexClient = useMemo(() => {
    if (!convexUrl) return null;
    return getConvexClient(convexUrl);
  }, [convexUrl]);

  // Gather metadata reactively (updates when dependencies change)
  const metadata = useMemo<FeedbackMetadata & { url?: string }>(() => {
    const globalRoute =
      typeof globalThis !== 'undefined' && (globalThis as Record<string, unknown>).__FEEDBACK_WIDGET_ROUTE__;
    // Allow tests to inject a deterministic route when Next.js hooks are unavailable

    const normalizedRoute = route && route.length > 0
      ? route
      : (typeof globalRoute === 'string' && globalRoute.length > 0
        ? globalRoute
        : (typeof window !== 'undefined' ? window.location.pathname || '/' : '/'));

    // Call getContext callback if provided
    let contextData: any = {};
    try {
      const result = getContext?.();
      if (result) {
        contextData = result;
      }
    } catch (error) {
      console.error('[FeedbackWidget] Error in getContext callback:', error);
    }

    return {
      route: normalizedRoute,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      project,
      ...contextData,
    };
  }, [route, project, getContext]);

  // If no Convex client, just render children without feedback functionality
  if (!convexClient) {
    return <>{children}</>;
  }

  return (
    <ConvexProvider client={convexClient}>
      {children}
      {enabled && (
        <FeedbackOverlayManager
          enabled={isOpen}
          onClose={() => setIsOpen(false)}
          onToggle={() => setIsOpen((prev) => !prev)}
          metadata={metadata}
          convexUrl={convexUrl}
          showButton={showButton}
        />
      )}
    </ConvexProvider>
  );
}
