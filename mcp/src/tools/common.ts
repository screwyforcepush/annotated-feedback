import { ConvexError, type ConvexClient } from '../convex-client.js';

export type ToolResultContent = {
  type: 'text';
  text: string;
};

export interface ToolResult {
  [x: string]: unknown;
  content: ToolResultContent[];
  isError?: boolean;
}

export type ToolHandler<TInput> = (client: ConvexClient, input: TInput) => Promise<ToolResult>;

/**
 * Allowed feedback status values
 * Centralized enum for consistency across tool definitions and handlers
 */
export const ALLOWED_STATUSES = ['pending', 'active', 'review', 'resolved', 'rejected'] as const;

export type ToolStatusInput = (typeof ALLOWED_STATUSES)[number];

/**
 * 5-State Status Model (Streamlined - No Legacy Aliases)
 * Database contains: pending, active, review, resolved, rejected
 * Schema enforces: pending | active | review | resolved | rejected
 */

export function normalizeStatusFromConvex(status: unknown): ToolStatusInput {
  // Direct mapping - no aliases needed
  if (ALLOWED_STATUSES.includes(status as any)) {
    return status as ToolStatusInput;
  }

  // Default to pending for any invalid/missing values
  return 'pending';
}

export function mapStatusToConvex(status: ToolStatusInput): string {
  // Direct pass-through - schema enforces correct values
  return status;
}

export function normalizeLimit(limit?: number): number {
  if (!Number.isFinite(limit) || limit === undefined || limit === null) {
    return 50;
  }

  const normalized = Math.trunc(limit);
  if (normalized <= 0) {
    return 50;
  }

  return Math.min(normalized, 100);
}

export function createSuccessResult(payload: unknown): ToolResult {
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(payload, null, 2),
      },
    ],
    isError: false,
  };
}

export function createErrorResult(message: string): ToolResult {
  return {
    content: [
      {
        type: 'text',
        text: message,
      },
    ],
    isError: true,
  };
}

export function extractConvexErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof ConvexError) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
}

export interface RawFeedbackRecord {
  _id: string;
  createdAt: number;
  url: string;
  route?: string | null;
  path?: string | null;
  note?: string | null;
  screenshotUrl?: string | null;
  status?: string | null;
  viewport?: {
    width: number;
    height: number;
  };
  ua?: string | null;
  releaseId?: string | null;
  env?: string | null;
  project?: string | null;
  flags?: string[] | null;
  overlayJSON?: string | null;
  priority?: string | null;
  assignedTo?: string | null;
  updatedAt?: number | null;
  resolvedAt?: number | null;
}

export interface NormalizedFeedbackRecord {
  _id: string;
  createdAt: number;
  updatedAt: number | null;
  url: string;
  note: string | null;
  status: ToolStatusInput;
}

export function normalizeFeedbackRecord(record: RawFeedbackRecord): NormalizedFeedbackRecord {
  return {
    _id: record._id,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt ?? null,
    url: record.url,
    note: record.note ?? null,
    status: normalizeStatusFromConvex(record.status),
  };
}
