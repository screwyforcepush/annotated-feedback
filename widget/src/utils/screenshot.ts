/**
 * Screenshot capture utilities using html-to-image
 *
 * Provides framework-agnostic screenshot capture with:
 * - Accurate CSS rendering (better than html2canvas)
 * - Improved fixed-position element support
 * - Configurable pixel ratio/quality
 * - PII redaction integration
 * - CORS handling for cross-origin images
 *
 * @module utils/screenshot
 */

import { toBlob } from 'html-to-image';
import type { ScreenshotOptions } from '../types';

/**
 * Capture a screenshot of the current viewport using html-to-image.
 * Assumes callers manage UI hiding/redaction before invoking.
 *
 * html-to-image provides superior rendering accuracy compared to html2canvas,
 * especially for fixed-position overlays, CSS transforms, and modern layouts.
 *
 * This function constrains capture to the visible viewport, not the full scrollable page.
 */
export async function captureScreenshot(
  targetElement: HTMLElement = document.body,
  options: ScreenshotOptions = {}
): Promise<Blob> {
  const mergedOptions: ScreenshotOptions = {
    ...DEFAULT_SCREENSHOT_OPTIONS,
    ...options,
  };

  const {
    pixelRatio = 1,
    quality = 0.92,
    backgroundColor = null,
  } = mergedOptions;

  // Capture only the visible viewport, not the entire scrollable page
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  // html-to-image configuration for viewport-constrained capture
  const blob = await toBlob(targetElement, {
    pixelRatio,
    quality,
    backgroundColor: backgroundColor || undefined, // null -> undefined for proper transparency
    cacheBust: true, // Prevent CORS caching issues
    // Constrain output to viewport dimensions
    width: viewportWidth,
    height: viewportHeight,
    // Offset the element to capture the visible viewport area
    style: {
      margin: '0',
      padding: '0',
      transform: `translate(-${scrollX}px, -${scrollY}px)`,
    },
  });

  if (!blob) {
    throw new Error('Failed to create screenshot blob. This may be caused by CORS issues with external resources.');
  }

  return blob;
}

/**
 * Default screenshot options
 * pixelRatio=1 balances quality vs file size (~90KB at typical viewport)
 * Use pixelRatio=2 for retina/high-DPI displays
 */
export const DEFAULT_SCREENSHOT_OPTIONS: ScreenshotOptions = {
  pixelRatio: 1,
  quality: 0.92,
  backgroundColor: null, // Transparent background
};
