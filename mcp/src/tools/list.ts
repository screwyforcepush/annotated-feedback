import { ConvexError, type ConvexClient } from '../convex-client.js';
import {
  ALLOWED_STATUSES,
  ToolHandler,
  ToolResult,
  ToolStatusInput,
  createErrorResult,
  createSuccessResult,
  mapStatusToConvex,
  normalizeFeedbackRecord,
  normalizeLimit,
  type RawFeedbackRecord,
} from './common.js';

export interface ListToolInput {
  status?: ToolStatusInput;
  limit?: number;
}

async function fetchRecords(
  client: ConvexClient,
  input: ListToolInput,
  limit: number
): Promise<RawFeedbackRecord[]> {
  const project = client.project?.trim();
  const baseArgs: Record<string, unknown> = { limit };

  if (project) {
    baseArgs.project = project;
  }

  if (input.status) {
    const convexStatus = mapStatusToConvex(input.status);
    return client.query<RawFeedbackRecord[]>('feedback:listByStatus', {
      ...baseArgs,
      status: convexStatus,
    });
  }

  return client.query<RawFeedbackRecord[]>('feedback:listByFilters', baseArgs);
}

export const listToolHandler: ToolHandler<ListToolInput> = async (
  client: ConvexClient,
  input: ListToolInput
): Promise<ToolResult> => {
  if (input.status && !ALLOWED_STATUSES.includes(input.status)) {
    return createErrorResult(
      `Invalid status "${input.status}". Status must be one of: ${ALLOWED_STATUSES.join(', ')}.`
    );
  }

  const limit = normalizeLimit(input.limit);

  try {
    const rawRecords = await fetchRecords(client, input, limit);
    const rawArray = Array.isArray(rawRecords) ? rawRecords : [];

    const normalizedRecords = rawArray.map(normalizeFeedbackRecord);

    return createSuccessResult(normalizedRecords);
  } catch (error: unknown) {
    const message = error instanceof ConvexError ? error.message : 'Unknown error listing feedback.';
    return createErrorResult(`Failed to list feedback: ${message}`);
  }
};
