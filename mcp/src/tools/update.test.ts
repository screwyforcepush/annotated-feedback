import { describe, expect, it, vi } from 'vitest';

import type { ConvexClient } from '../convex-client.js';
import { ConvexError } from '../convex-client.js';
import { updateToolHandler } from './update.js';

const createMockClient = () =>
  ({
    mutation: vi.fn(),
  }) as unknown as ConvexClient;

describe('update tool handler', () => {
  it('maps status to backend values and returns success payload', async () => {
    const mockClient = createMockClient();
    const mutationSpy = mockClient.mutation as unknown as ReturnType<typeof vi.fn>;
    mutationSpy.mockResolvedValue(null);

    const result = await updateToolHandler(mockClient, {
      feedbackId: 'feedback_1',
      status: 'review',
    });

    expect(mutationSpy).toHaveBeenCalledWith('feedback:updateStatus', {
      feedbackId: 'feedback_1',
      status: 'review',
    });

    expect(result).toMatchObject({
      content: [{ type: 'text', text: expect.stringContaining('successfully updated') }],
      isError: false,
    });
  });

  it('validates status input', async () => {
    const mockClient = createMockClient();

    const result = await updateToolHandler(mockClient, {
      feedbackId: 'feedback_1',
      status: 'invalid' as never,
    });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toMatch(/status must be one of/i);
  });

  it('returns error payload when Convex mutation fails', async () => {
    const mockClient = createMockClient();
    const mutationSpy = mockClient.mutation as unknown as ReturnType<typeof vi.fn>;
    mutationSpy.mockRejectedValue(new ConvexError('mutation failed', 500));

    const result = await updateToolHandler(mockClient, {
      feedbackId: 'feedback_1',
      status: 'pending',
    });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toMatch(/mutation failed/);
  });
});
