/**
 * PII (Personally Identifiable Information) redaction utilities
 *
 * Automatically detects and blurs sensitive form fields before screenshot capture
 * to prevent accidental exposure of user data in feedback submissions.
 *
 * Redaction strategies:
 * - Password fields (type="password")
 * - Credit card fields (autocomplete="cc-*")
 * - SSN/Tax ID fields (data-sensitive attribute)
 * - Custom exclusions (data-no-capture attribute)
 *
 * @module utils/pii-redaction
 */

/**
 * CSS class applied to elements that should be blurred
 */
const REDACTION_CLASS = 'feedback-widget-redact';

/**
 * Apply visual redaction to sensitive fields
 *
 * This function will:
 * 1. Query DOM for sensitive field selectors
 * 2. Apply blur CSS filter via class
 * 3. Return cleanup function to restore original state
 *
 * @returns Cleanup function to remove redaction
 *
 * @example
 * ```tsx
 * const restore = applyPIIRedaction();
 * await captureScreenshot();
 * restore(); // Remove blur effects
 * ```
 */
export function applyPIIRedaction(): () => void {
  const redactedElements: HTMLElement[] = [];
  const hiddenElements: Array<{ element: HTMLElement; previousHidden: string | null }> = [];
  const seen = new Set<HTMLElement>();

  const markHidden = (element: HTMLElement) => {
    if (seen.has(element)) return;
    seen.add(element);
    hiddenElements.push({
      element,
      previousHidden: element.getAttribute('data-feedback-widget-hidden'),
    });
    element.setAttribute('data-feedback-widget-hidden', 'true');
  };

  const markRedacted = (element: HTMLElement) => {
    if (seen.has(element)) return;
    seen.add(element);
    element.classList.add(REDACTION_CLASS);
    redactedElements.push(element);
  };

  SENSITIVE_FIELD_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      const element = node as HTMLElement;

      if (element.dataset.noCapture === 'true') {
        markHidden(element);
        return;
      }

      if (element.tagName.toLowerCase() === 'input' && element.getAttribute('type') === 'password') {
        markRedacted(element);
        return;
      }

      if (element.matches('.sensitive-data') || element.dataset.sensitive === 'true') {
        markRedacted(element);
        return;
      }

      if (element.getAttribute('autocomplete')?.startsWith('cc-')) {
        markRedacted(element);
        return;
      }

      markRedacted(element);
    });
  });

  return () => {
    redactedElements.forEach((element) => {
      element.classList.remove(REDACTION_CLASS);
    });

    hiddenElements.forEach(({ element, previousHidden }) => {
      if (previousHidden !== null) {
        element.setAttribute('data-feedback-widget-hidden', previousHidden);
      } else {
        element.removeAttribute('data-feedback-widget-hidden');
      }
    });
  };
}

/**
 * Selectors for fields that should be redacted
 * Matches password fields, credit card inputs, and explicitly marked sensitive data
 */
export const SENSITIVE_FIELD_SELECTORS = [
  'input[type="password"]',
  'input[autocomplete^="cc-"]',
  'input[autocomplete="current-password"]',
  'input[autocomplete="new-password"]',
  '[data-sensitive="true"]',
  '[data-no-capture="true"]',
  '.sensitive-data',
] as const;
