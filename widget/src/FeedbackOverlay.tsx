/**
 * FeedbackOverlay - Universal Feedback Canvas
 *
 * Extracted from the Storybook implementation with minimal changes
 * to preserve proven behavior while enabling universal app support.
 *
 * Key enhancements:
 * - Metadata supplied via props (no Storybook path extraction)
 * - Screenshot capture delegated to utils/screenshot
 * - PII redaction applied before capture via utils/pii-redaction
 * - Metadata forwarded with submission payload
 *
 * Specification reference:
 * docs/project/spec/storybook-feedback-widget/universal-feedback-mcp-specification.md
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';

type ExcalidrawImperativeAPI = {
  getSceneElements(): ReadonlyArray<any>;
  getAppState(): any;
  updateScene(scene: { elements: ReadonlyArray<any>; appState: any }): void;
};

// Dynamic import for Excalidraw to avoid SSR issues
let ExcalidrawComponent: any = null;

import { useMutation } from 'convex/react';
import type {
  FeedbackMetadata,
  FeedbackOverlayProps,
  ToastMessage,
  ToolbarPosition,
} from './types';
import { applyPIIRedaction } from './utils/pii-redaction';
import { captureScreenshot, DEFAULT_SCREENSHOT_OPTIONS } from './utils/screenshot';

// Convex mutation argument types
type SubmitFeedbackArgs = {
  url: string;
  path: string;
  note?: string;
  overlayJSON: string;
  screenshot: string;
  ua: string;
  viewport: { width: number; height: number };
  route?: string;
  releaseId?: string;
  env?: string;
  userHash?: string;
  flags?: string[];
  project?: string;
};

/**
 * Derive submission path from metadata
 * Storybook path takes precedence, then route/project fallbacks
 */
function deriveSubmissionPath(metadata?: FeedbackMetadata): string {
  if (metadata?.path && metadata.path.trim().length > 0) {
    return metadata.path;
  }

  if (metadata?.route && metadata.route.trim().length > 0) {
    return `route:${metadata.route}`;
  }

  if (metadata?.project && metadata.project.trim().length > 0) {
    return `project:${metadata.project}`;
  }

  return 'unmapped-feedback';
}

/**
 * Toast notification component
 */
function Toast({ message, type = 'success', onClose }: ToastMessage & { onClose: () => void }) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`feedback-widget-toast${type === 'error' ? ' feedback-widget-toast--error' : ''}`}
      role="status"
    >
      {message}
    </div>
  );
}

/**
 * Loading spinner rendered while submission is in-flight
 */
function LoadingSpinner() {
  return <div className="feedback-widget-loading-spinner" aria-hidden="true" />;
}

/**
 * Hide UI elements that should not appear in the screenshot.
 * Returns cleanup callback that restores previous state.
 * Uses inline styles to prevent React from removing attributes during re-render.
 */
function hideInterfaceElements(toolbar?: HTMLElement | null, extraSelectors?: string[]): () => void {
  const hiddenElements: Array<{ element: HTMLElement; previousDisplay: string }> = [];

  const hide = (element: HTMLElement | null) => {
    if (!element) return;
    hiddenElements.push({
      element,
      previousDisplay: element.style.display,
    });
    element.style.display = 'none';
  };

  if (toolbar) {
    hide(toolbar);
  }

  const selectorList = extraSelectors ?? [];
  if (selectorList.length > 0) {
    document.querySelectorAll(selectorList.join(',')).forEach((node) => {
      hide(node as HTMLElement);
    });
  }

  return () => {
    hiddenElements.forEach(({ element, previousDisplay }) => {
      element.style.display = previousDisplay;
    });
  };
}

/**
 * FeedbackOverlay Component
 *
 * Renders a full-screen overlay with Excalidraw annotations, note input,
 * and screenshot submission workflow.
 */
export function FeedbackOverlay({ onClose, metadata }: FeedbackOverlayProps) {
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [viewportHeight, setViewportHeight] = useState(() => window.innerHeight);
  const [toolbarPosition, setToolbarPosition] = useState<ToolbarPosition>('top-left');
  const [isExcalidrawLoaded, setIsExcalidrawLoaded] = useState(false);

  const excalidrawAPIRef = useRef<ExcalidrawImperativeAPI | null>(null);

  // Load Excalidraw dynamically on client side only
  useEffect(() => {
    if (typeof window !== 'undefined' && !ExcalidrawComponent) {
      import('@excalidraw/excalidraw')
        .then((mod) => {
          ExcalidrawComponent = mod.Excalidraw;
          setIsExcalidrawLoaded(true);
        })
        .catch((err) => {
          console.error('Failed to load Excalidraw:', err);
          setToast({ message: 'Failed to load drawing tools', type: 'error' });
        });
    } else if (ExcalidrawComponent) {
      setIsExcalidrawLoaded(true);
    }
  }, []);

  const generateUploadUrl = useMutation('feedback:generateUploadUrl' as any);
  const submitFeedback = useMutation('feedback:submit' as any);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * Handle submission workflow:
   * 1. Validate metadata + canvas API
   * 2. Capture Excalidraw scene + screenshot (with PII redaction)
   * 3. Upload screenshot to Convex storage
   * 4. Submit feedback payload with metadata
   */
  const handleSubmit = useCallback(async () => {
    if (!excalidrawAPIRef.current) {
      setToast({ message: 'Drawing canvas not ready', type: 'error' });
      return;
    }

    const submissionPath = deriveSubmissionPath(metadata);
    if (!submissionPath) {
      setToast({ message: 'Callback metadata missing path/route', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    const sceneElements = excalidrawAPIRef.current.getSceneElements();
    const overlayJSON = JSON.stringify(sceneElements);

    const toolbar = document.getElementById('feedback-toolbar');
    const toggleButton = document.getElementById('feedback-toggle-button');
    const hideUI = hideInterfaceElements(toolbar, [
      '.App-menu',
      '.layer-ui__wrapper',
      '.zen-mode-transition',
      '.zoom-actions',
      '.Stack_vertical.App-menu_top__left',
      '[class*="layer-ui__wrapper"]',
      '.undo-redo-buttons',
      '[class*="undo-redo"]',
    ]);

    // Also hide the toggle button
    if (toggleButton) {
      toggleButton.style.display = 'none';
    }

    const restorePII = applyPIIRedaction();

    try {
      // Wait for multiple frames to ensure CSS changes are applied
      await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

      // Capture document.body to include both page content AND the overlay
      // The captureScreenshot utility will constrain to viewport dimensions
      const screenshotBlob = await captureScreenshot(document.body, {
        ...DEFAULT_SCREENSHOT_OPTIONS,
        backgroundColor: null,
      });

      const uploadUrl = await generateUploadUrl();
      const uploadResponse = await fetch(uploadUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'image/png' },
        body: screenshotBlob,
      });

      if (!uploadResponse.ok) {
        throw new Error(`Upload failed: ${uploadResponse.statusText}`);
      }

      const { storageId } = (await uploadResponse.json()) as { storageId: string };

      const trimmedNote = note.trim();

      const submissionMetadata: FeedbackMetadata = {
        ...(metadata ?? {}),
      };

      if (!submissionMetadata.path) {
        submissionMetadata.path = submissionPath;
      }

      const submitArgs: SubmitFeedbackArgs = {
        url: window.location.href,
        path: submissionPath,
        note: trimmedNote.length > 0 ? trimmedNote : undefined,
        overlayJSON,
        screenshot: storageId,
        ua: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        // Universal widget fields (top-level, not nested in metadata)
        route: submissionMetadata.route,
        releaseId: submissionMetadata.releaseId,
        env: submissionMetadata.env,
        userHash: submissionMetadata.userHash,
        flags: submissionMetadata.flags,
        project: submissionMetadata.project,
      };

      await submitFeedback(submitArgs);

      setToast({ message: 'Feedback submitted successfully!', type: 'success' });

      // Clear the form but keep overlay open so user can submit more feedback
      setNote('');
      if (excalidrawAPIRef.current) {
        const appState = excalidrawAPIRef.current.getAppState();
        excalidrawAPIRef.current.updateScene({
          elements: [],
          appState,
        });
      }
    } catch (error) {
      console.error('[FeedbackOverlay] Submission failed:', error);
      setToast({
        message: error instanceof Error ? error.message : 'Failed to submit feedback',
        type: 'error',
      });
    } finally {
      hideUI();
      restorePII();
      // Restore toggle button visibility
      if (toggleButton) {
        toggleButton.style.display = '';
      }
      setIsSubmitting(false);
    }
  }, [metadata, note, onClose, generateUploadUrl, submitFeedback]);

  const handleReset = useCallback(() => {
    setNote('');
    if (excalidrawAPIRef.current) {
      const appState = excalidrawAPIRef.current.getAppState();
      excalidrawAPIRef.current.updateScene({
        elements: [],
        appState,
      });
    }
  }, []);

  const cycleToolbarPosition = useCallback(() => {
    setToolbarPosition((prev) => {
      const positions: ToolbarPosition[] = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];
      const currentIndex = positions.indexOf(prev);
      const nextIndex = (currentIndex + 1) % positions.length;
      return positions[nextIndex] || 'top-right';
    });
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('.excalidraw') && !target.closest('.App-menu')) {
        event.preventDefault();
        event.stopPropagation();
        window.scrollBy({
          top: event.deltaY,
          left: event.deltaX,
          behavior: 'auto',
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    return () => {
      window.removeEventListener('wheel', handleWheel, { capture: true } as any);
    };
  }, []);

  const TOOLBAR_HEIGHT = 60;

  return (
    <>
      <style>{`
        .Stack.Stack_vertical.App-menu_top__left {
          display: none !important;
        }

        .layer-ui__wrapper__top-right.zen-mode-transition {
          display: none !important;
        }

        .Stack.Stack_vertical.zoom-actions {
          display: none !important;
        }

        .excalidraw-toolbar-top-left .App-menu_top {
          position: fixed !important;
          display: block !important;
          top: ${TOOLBAR_HEIGHT + 10}px !important;
          left: 10px !important;
          right: auto !important;
          bottom: auto !important;
        }

        .excalidraw-toolbar-top-right .App-menu_top {
          position: fixed !important;
          display: block !important;
          top: ${TOOLBAR_HEIGHT + 10}px !important;
          right: 10px !important;
          left: auto !important;
          bottom: auto !important;
        }

        .excalidraw-toolbar-bottom-left .App-menu_top {
          position: fixed !important;
          display: block !important;
          bottom: 10px !important;
          left: 10px !important;
          top: auto !important;
          right: auto !important;
        }

        .excalidraw-toolbar-bottom-right .App-menu_top {
          position: fixed !important;
          display: block !important;
          bottom: 10px !important;
          right: 10px !important;
          top: auto !important;
          left: auto !important;
        }
      `}</style>

      <div
        id="feedback-toolbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: `${TOOLBAR_HEIGHT}px`,
          zIndex: 10000,
          background: 'white',
          borderBottom: '1px solid #e5e7eb',
          padding: '12px 16px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          boxSizing: 'border-box',
          pointerEvents: 'auto',
        }}
      >
        <div
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#374151',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          Feedback Mode
        </div>

        <input
          type="text"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Describe your change request"
          maxLength={2000}
          disabled={isSubmitting}
          style={{
            flex: 1,
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '13px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: '#000000',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(event) => {
            event.target.style.borderColor = '#3b82f6';
          }}
          onBlur={(event) => {
            event.target.style.borderColor = '#d1d5db';
          }}
        />

        <button
          onClick={cycleToolbarPosition}
          disabled={isSubmitting}
          title={`Tools: ${toolbarPosition}`}
          style={{
            padding: '8px 12px',
            fontSize: '13px',
            fontWeight: 500,
            color: '#374151',
            background: 'white',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            opacity: isSubmitting ? 0.5 : 1,
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(event) => {
            if (!isSubmitting) {
              event.currentTarget.style.background = '#f9fafb';
            }
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.background = 'white';
          }}
        >
          📍
        </button>

        <button
          onClick={handleReset}
          disabled={isSubmitting}
          style={{
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 500,
            color: '#374151',
            background: 'white',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            opacity: isSubmitting ? 0.5 : 1,
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(event) => {
            if (!isSubmitting) {
              event.currentTarget.style.background = '#f9fafb';
            }
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.background = 'white';
          }}
        >
          Reset
        </button>

        <button
          onClick={() => void handleSubmit()}
          disabled={isSubmitting}
          style={{
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 500,
            color: 'white',
            background: isSubmitting ? '#9ca3af' : '#3b82f6',
            border: 'none',
            borderRadius: '6px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(event) => {
            if (!isSubmitting) {
              event.currentTarget.style.background = '#2563eb';
            }
          }}
          onMouseLeave={(event) => {
            if (!isSubmitting) {
              event.currentTarget.style.background = '#3b82f6';
            }
          }}
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner />
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </div>

      <div
        className={`excalidraw-toolbar-${toolbarPosition}`}
        style={{
          position: 'fixed',
          top: `${TOOLBAR_HEIGHT}px`,
          left: 0,
          width: '100vw',
          height: `${viewportHeight - TOOLBAR_HEIGHT}px`,
          zIndex: 9999,
          overflow: 'hidden',
          pointerEvents: 'auto',
        }}
      >
        {isExcalidrawLoaded && ExcalidrawComponent ? (
          <ExcalidrawComponent
            excalidrawAPI={(api: ExcalidrawImperativeAPI) => {
              excalidrawAPIRef.current = api;
            }}
            initialData={{
              appState: {
                viewBackgroundColor: 'transparent',
                currentItemStrokeColor: '#ff0000', // Red stroke for visibility
              },
            }}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              fontSize: '16px',
              color: '#6b7280',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            Loading drawing tools...
          </div>
        )}
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
