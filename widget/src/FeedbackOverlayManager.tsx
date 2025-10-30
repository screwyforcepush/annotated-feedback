/**
 * Universal Feedback Overlay Manager
 *
 * This component manages the FeedbackOverlay lifecycle independently of navigation/routing.
 * It prevents the overlay from being unmounted/remounted when users navigate between routes,
 * which prevents flicker and network request cancellations.
 *
 * Key behavior:
 * - Renders to a stable root outside React's tree (portal pattern)
 * - Uses DOM manipulation to show/hide overlay
 * - Persists overlay instance across route navigations
 * - Framework-agnostic event-based communication
 *
 * Enhancements from Storybook version:
 * - Accepts metadata prop for route/release/env/flags context
 * - Environment gating (enabled prop controls availability)
 * - No Storybook-specific dependencies
 * - Uses type imports from ./types
 *
 * Architecture:
 * - Singleton pattern: One ConvexProvider instance across app lifecycle
 * - Portal rendering: Overlay mounts to document.body, escapes all container constraints
 * - Event-driven: Custom events decouple manager from overlay lifecycle
 */

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { FeedbackOverlay } from './FeedbackOverlay';
import type { FeedbackOverlayManagerProps, FeedbackMetadata } from './types';

/**
 * Internal controller that stays mounted and listens for visibility changes
 * Uses event-based communication to avoid React re-render coupling
 */
function OverlayController({
  onCloseRef,
  onToggleRef,
  metadataRef,
  showButton,
}: {
  onCloseRef: React.RefObject<() => void>;
  onToggleRef: React.RefObject<() => void>;
  metadataRef: React.RefObject<FeedbackMetadata | undefined>;
  showButton?: boolean;
}) {
  // Initialize from persistent state to maintain visibility across navigation
  const [isVisible, setIsVisible] = React.useState(persistentVisibilityState);
  const [buttonVisible, setButtonVisible] = React.useState(showButton);

  useEffect(() => {
    const handleToggle = (event: Event) => {
      const customEvent = event as CustomEvent<{ enabled: boolean; showButton?: boolean }>;
      const newVisibility = customEvent.detail.enabled;
      setIsVisible(newVisibility);
      persistentVisibilityState = newVisibility; // Persist across navigation
      if (customEvent.detail.showButton !== undefined) {
        setButtonVisible(customEvent.detail.showButton);
      }
    };

    const handleToggleRequest = (event: Event) => {
      const customEvent = event as CustomEvent<{ toggle: boolean }>;
      if (customEvent.detail.toggle) {
        // Toggle the visibility and notify parent via callback
        const newVisibility = !isVisible;
        setIsVisible(newVisibility);
        persistentVisibilityState = newVisibility; // Persist across navigation
        if (newVisibility) {
          // Opening overlay
          onToggleRef.current?.();
        } else {
          // Closing overlay
          onCloseRef.current?.();
        }
      }
    };

    window.addEventListener('feedback-overlay-toggle', handleToggle);
    window.addEventListener('feedback-overlay-toggle-request', handleToggleRequest);
    return () => {
      window.removeEventListener('feedback-overlay-toggle', handleToggle);
      window.removeEventListener('feedback-overlay-toggle-request', handleToggleRequest);
    };
  }, [isVisible]);

  return (
    <>
      {/* Floating Toggle Button - Always visible when enabled, toggles overlay on/off */}
      {buttonVisible && (
        <button
          id="feedback-toggle-button"
          onClick={() => {
            // Dispatch event to toggle overlay instead of using ref callback
            // This avoids stale closure issues with singleton pattern
            window.dispatchEvent(
              new CustomEvent('feedback-overlay-toggle-request', {
                detail: { toggle: true },
              })
            );
          }}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 2147483647,
            backgroundColor: isVisible ? '#8b5cf6' : '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            transition: 'all 0.2s ease',
            pointerEvents: 'auto',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
          }}
          title={isVisible ? "Close Feedback (Alt+F)" : "Give Feedback (Alt+F)"}
          aria-label={isVisible ? "Close Feedback" : "Give Feedback"}
        >
          {isVisible ? '✕' : '💬'}
        </button>
      )}

      {/* Feedback Overlay */}
      {isVisible && (
        <FeedbackOverlay
          onClose={() => onCloseRef.current?.()}
          metadata={metadataRef.current}
        />
      )}
    </>
  );
}

/**
 * Global state to track if overlay is mounted
 * Singleton pattern ensures single instance across app lifecycle
 */
let overlayRoot: ReactDOM.Root | null = null;
let overlayContainer: HTMLDivElement | null = null;
let currentConvexClient: ConvexReactClient | null = null;
let persistentVisibilityState: boolean = false; // Persists across navigation

/**
 * FeedbackOverlayManager Component
 *
 * Manager component that controls overlay via imperative DOM manipulation.
 * This approach keeps the overlay mounted and just toggles visibility via events.
 *
 * Props:
 * - enabled: Whether the overlay should be visible
 * - onClose: Callback when user closes the overlay
 * - metadata: Context metadata (route, releaseId, env, flags, project)
 * - convexUrl: Convex backend URL
 *
 * Usage:
 * ```tsx
 * <FeedbackOverlayManager
 *   enabled={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   metadata={{
 *     route: '/dashboard',
 *     releaseId: process.env.NEXT_PUBLIC_RELEASE_ID,
 *     env: 'staging',
 *     project: 'acme-webapp'
 *   }}
 *   convexUrl={process.env.NEXT_PUBLIC_CONVEX_URL}
 * />
 * ```
 */
export function FeedbackOverlayManager({
  enabled,
  onClose,
  onToggle,
  metadata,
  convexUrl,
  showButton = false,
}: FeedbackOverlayManagerProps) {
  const onCloseRef = useRef(onClose);
  const onToggleRef = useRef(onToggle);
  const metadataRef = useRef(metadata);

  // Keep callbacks up to date
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    onToggleRef.current = onToggle;
  }, [onToggle]);

  useEffect(() => {
    metadataRef.current = metadata;
  }, [metadata]);

  useEffect(() => {
    // Validate Convex URL
    if (!convexUrl) {
      console.warn('[FeedbackWidget] convexUrl not provided');
      return;
    }

    // Create Convex client only once (singleton pattern)
    if (!currentConvexClient) {
      currentConvexClient = new ConvexReactClient(convexUrl);
    }

    // Create container and root only once
    if (!overlayContainer) {
      // Always mount in current document to ensure styles apply correctly
      // (Excalidraw CSS is loaded in the same context as the widget)
      overlayContainer = document.createElement('div');
      overlayContainer.id = 'feedback-overlay-root';
      document.body.appendChild(overlayContainer);

      overlayRoot = ReactDOM.createRoot(overlayContainer);

      // Render overlay wrapper that stays mounted
      overlayRoot.render(
        <ConvexProvider client={currentConvexClient}>
          <OverlayController
            onCloseRef={onCloseRef}
            onToggleRef={onToggleRef}
            metadataRef={metadataRef}
            showButton={showButton}
          />
        </ConvexProvider>
      );

      // On first initialization, set persistent state from parent's enabled prop
      persistentVisibilityState = enabled;

      // Dispatch initial state
      window.dispatchEvent(
        new CustomEvent('feedback-overlay-toggle', {
          detail: { enabled, showButton },
        })
      );
    } else {
      // After initialization, only update showButton, not visibility
      // Visibility is controlled by user interactions (toggle button) and persists across navigation
      window.dispatchEvent(
        new CustomEvent('feedback-overlay-toggle', {
          detail: { enabled: persistentVisibilityState, showButton },
        })
      );
    }
  }, [enabled, convexUrl, showButton]);

  // This component doesn't render anything itself - uses portal pattern
  return null;
}
