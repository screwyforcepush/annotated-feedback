/**
 * annotated-feedback-widget
 *
 * Universal feedback widget with visual annotation support.
 * Designed for integration into React/Next.js applications.
 *
 * Key Features:
 * - Visual feedback with Excalidraw annotations
 * - Screenshot capture via html-to-image (superior CSS rendering)
 * - Convex backend integration for storage
 * - Framework-agnostic design patterns
 * - TypeScript support with full type definitions
 *
 * @example
 * ```tsx
 * import { FeedbackProvider } from 'annotated-feedback-widget';
 * import 'annotated-feedback-widget/styles.css';
 *
 * function App() {
 *   return (
 *     <FeedbackProvider
 *       convexUrl={process.env.NEXT_PUBLIC_CONVEX_URL!}
 *       project="my-app"
 *       enabled={process.env.NODE_ENV !== 'production'}
 *       hotkey="Alt+F"
 *     >
 *       <YourApp />
 *     </FeedbackProvider>
 *   );
 * }
 * ```
 *
 * @packageDocumentation
 */

/**
 * FeedbackProvider component
 *
 * Wrap your application with this provider to enable the visual feedback widget.
 * Handles hotkey registration, metadata gathering, and Convex client lifecycle.
 */
export { FeedbackProvider } from './FeedbackProvider';

/**
 * FeedbackOverlay component
 *
 * Lower-level overlay surface that powers the annotation experience.
 * Exposed for advanced teams that need to compose custom trigger flows.
 */
export { FeedbackOverlay } from './FeedbackOverlay';

/**
 * FeedbackOverlayManager component
 *
 * Singleton portal manager that keeps the overlay mounted outside of your app tree.
 * Use directly if you need to orchestrate overlay visibility yourself.
 */
export { FeedbackOverlayManager } from './FeedbackOverlayManager';

/**
 * Type definitions
 *
 * Re-export all package types so consumers can import from the root module.
 */
export type {
  FeedbackStatus,
  FeedbackPriority,
  Viewport,
  FeedbackMetadata,
  FeedbackSubmission,
  FeedbackRecord,
  FeedbackOverlayManagerProps,
  FeedbackOverlayProps,
  FeedbackContext,
  FeedbackProviderProps,
  ScreenshotOptions,
  ToastMessage,
  ToolbarPosition,
} from './types';

/**
 * Screenshot utilities for advanced workflows
 *
 * These helpers power the overlay capture flow and can be used directly when
 * embedding the widget into custom workflows or automated tests.
 */
export { captureScreenshot, DEFAULT_SCREENSHOT_OPTIONS } from './utils/screenshot';

/**
 * PII redaction helpers
 *
 * Apply blur styling to sensitive fields before capturing screenshots.
 */
export { applyPIIRedaction, SENSITIVE_FIELD_SELECTORS } from './utils/pii-redaction';

/**
 * Metadata gathering utilities
 *
 * Access viewport measurements, user agent, anonymized user hashes, and composed metadata.
 */
export { getViewportDimensions, getUserAgent, generateUserHash, gatherMetadata } from './utils/metadata';
