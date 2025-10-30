/**
 * Type definitions for feedback widget package
 *
 * These types support both Storybook and universal app contexts
 */

/**
 * Convex storage ID type (string)
 * Standalone type to avoid dependency on Convex generated types
 */
export type ConvexStorageId = string;

/**
 * Convex document ID type (string)
 * Standalone type to avoid dependency on Convex generated types
 */
export type ConvexDocumentId = string;

/**
 * Feedback status states
 * 5-state model for MCP integration
 */
export type FeedbackStatus = 'pending' | 'active' | 'review' | 'resolved' | 'rejected';

/**
 * Feedback priority levels
 */
export type FeedbackPriority = 'low' | 'medium' | 'high' | 'critical';

/**
 * Viewport dimensions
 */
export interface Viewport {
  width: number;
  height: number;
}

/**
 * Context metadata for feedback submissions
 * All fields optional for backward compatibility with Storybook
 */
export interface FeedbackMetadata {
  /** App route (e.g., "/dashboard") - for universal apps */
  route?: string;

  /** Storybook story path (e.g., "button--primary") - for Storybook */
  path?: string;

  /** Git SHA or version tag */
  releaseId?: string;

  /** Environment: "staging" | "dev" | "review" | "storybook" | "production" */
  env?: string;

  /** K-anonymized user identifier (SHA256) */
  userHash?: string;

  /** Active feature flags */
  flags?: string[];

  /** Project identifier (e.g., "acme-webapp" | "storybook") */
  project?: string;
}

/**
 * Complete feedback submission data
 */
export interface FeedbackSubmission {
  /** Full page URL */
  url: string;

  /** User-provided note/description */
  note?: string;

  /** Excalidraw scene elements as JSON string */
  overlayJSON: string;

  /** Convex storage ID for screenshot */
  screenshot: ConvexStorageId;

  /** User agent string */
  ua: string;

  /** Viewport dimensions at capture time */
  viewport: Viewport;

  /** Context metadata */
  metadata: FeedbackMetadata;
}

/**
 * Feedback record from database (with additional fields)
 */
export interface FeedbackRecord extends FeedbackSubmission {
  /** Convex document ID */
  _id: ConvexDocumentId;

  /** Creation timestamp (Unix ms) */
  createdAt: number;

  /** Current status */
  status: FeedbackStatus;

  /** Priority level */
  priority?: FeedbackPriority;

  /** Assigned developer/team */
  assignedTo?: string;

  /** Last update timestamp */
  updatedAt?: number;

  /** Resolution timestamp */
  resolvedAt?: number;

  /** Screenshot URL (signed, temporary) */
  screenshotUrl?: string;
}

/**
 * Props for FeedbackOverlayManager
 */
export interface FeedbackOverlayManagerProps {
  /** Whether the overlay should be visible */
  enabled: boolean;

  /** Callback when user closes the overlay */
  onClose: () => void;

  /** Callback to toggle overlay visibility */
  onToggle: () => void;

  /** Show floating toggle button */
  showButton?: boolean;

  /** Context metadata to include with submission */
  metadata?: FeedbackMetadata;

  /** Convex URL for backend connection */
  convexUrl: string;
}

/**
 * Props for FeedbackOverlay component
 */
export interface FeedbackOverlayProps {
  /** Callback to close/hide the overlay */
  onClose: () => void;

  /** Context metadata to include with submission */
  metadata?: FeedbackMetadata;
}

/**
 * Toast notification type
 */
export interface ToastMessage {
  message: string;
  type: 'success' | 'error';
}

/**
 * Excalidraw toolbar position
 */
export type ToolbarPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

/**
 * Context callback return type
 * Provides dynamic metadata to enrich feedback submissions
 *
 * @example
 * ```tsx
 * getContext: () => ({
 *   releaseId: process.env.NEXT_PUBLIC_RELEASE_ID,
 *   env: process.env.NEXT_PUBLIC_ENV,
 *   flags: getActiveFeatureFlags(),
 * })
 * ```
 */
export type FeedbackContext = Partial<Omit<FeedbackMetadata, 'route' | 'path'>>;

/**
 * Props for FeedbackProvider component
 * Top-level wrapper that manages feedback widget lifecycle
 *
 * @example
 * ```tsx
 * <FeedbackProvider
 *   convexUrl={process.env.NEXT_PUBLIC_CONVEX_URL!}
 *   project="acme-webapp"
 *   enabled={process.env.NODE_ENV !== 'production'}
 *   hotkey="Alt+F"
 *   getContext={() => ({
 *     releaseId: process.env.NEXT_PUBLIC_RELEASE_ID,
 *     env: process.env.NEXT_PUBLIC_ENV,
 *   })}
 * >
 *   {children}
 * </FeedbackProvider>
 * ```
 */
export interface FeedbackProviderProps {
  /** Convex deployment URL for backend connection */
  convexUrl: string;

  /** Project identifier (e.g., "acme-webapp", "storybook") */
  project: string;

  /** Enable/disable widget based on environment (e.g., disabled in production) */
  enabled: boolean;

  /** Keyboard shortcut to toggle widget (default: "Alt+F") */
  hotkey?: string;

  /** Show floating toggle button (default: false) */
  showButton?: boolean;

  /** Dynamic context provider callback - called on each submission */
  getContext?: () => FeedbackContext;

  /** Child components */
  children: React.ReactNode;
}

/**
 * Screenshot capture configuration options
 * Controls quality and rendering of feedback screenshots
 *
 * Uses html-to-image library which provides superior CSS rendering accuracy
 * compared to html2canvas, especially for fixed-position overlays and modern layouts.
 *
 * @see https://github.com/bubkoo/html-to-image for detailed option descriptions
 */
export interface ScreenshotOptions {
  /** Pixel ratio for screenshot resolution (default: 1, use 2 for retina displays) */
  pixelRatio?: number;

  /** Image quality for PNG compression (default: 0.92, range: 0-1) */
  quality?: number;

  /** Background color for transparent elements (default: null for transparent) */
  backgroundColor?: string | null;
}
