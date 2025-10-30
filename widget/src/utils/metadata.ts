/**
 * Metadata gathering utilities
 *
 * Captures context information about the environment, release, and user
 * to enrich feedback submissions with actionable details.
 *
 * Metadata includes:
 * - Current route/path
 * - Release ID (git SHA or version tag)
 * - Environment (dev, staging, production)
 * - Active feature flags
 * - Anonymized user identifier
 * - Viewport dimensions
 * - User agent
 *
 * @module utils/metadata
 */

import type { FeedbackMetadata, Viewport } from '../types';

/**
 * Gather viewport dimensions
 *
 * @returns Current viewport width and height
 */
export function getViewportDimensions(): Viewport {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * Get user agent string
 *
 * @returns Browser user agent
 */
export function getUserAgent(): string {
  return window.navigator.userAgent;
}

/**
 * Generate anonymized user hash
 *
 * This function will implement k-anonymization using SHA256
 * to create a privacy-preserving user identifier.
 *
 * @param userId - Original user identifier
 * @returns SHA256 hash of user ID (or undefined if not available)
 */
export function generateUserHash(userId?: string): string | undefined {
  if (!userId) return undefined;

  // TODO: Implement SHA256 hashing
  // Use Web Crypto API: crypto.subtle.digest('SHA-256', ...)
  throw new Error('generateUserHash not yet implemented');
}

/**
 * Gather all available metadata
 *
 * Combines environment variables, URL context, and dynamic values
 * into a complete metadata object for feedback submission.
 *
 * @param additionalContext - Additional context from provider
 * @returns Complete feedback metadata
 */
export function gatherMetadata(
  additionalContext?: Partial<FeedbackMetadata>
): FeedbackMetadata {
  return {
    ...additionalContext,
    // Add more automatic detection:
    // - route from window.location.pathname
    // - env from process.env or window.__ENV__
    // etc.
  };
}
