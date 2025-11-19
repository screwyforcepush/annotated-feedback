#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { createConvexClientFromEnv } from './convex-client.js';
import {
  listToolHandler,
  getToolHandler,
  updateToolHandler,
} from './tools/index.js';
import { ALLOWED_STATUSES } from './tools/common.js';

/**
 * Register feedback tool handlers with actual implementations.
 * Uses Zod v3 schemas for parameter validation (MCP SDK requirement).
 */
function registerFeedbackTools(server: McpServer) {
  // Create ConvexClient singleton for all tools
  const client = createConvexClientFromEnv();

  // Register list tool - all optional parameters
  (server as any).tool(
    'list',
    'List feedback entries with optional status filter. Filter by "pending" status to get new feedback.',
    {
      status: z.enum(ALLOWED_STATUSES as any).optional(),
      limit: z.number().min(1).max(100).optional(),
    },
    async (input: any) => {
      return await listToolHandler(client, input || {});
    }
  );

  // Register get tool - required feedbackId
  (server as any).tool(
    'get',
    'Retrieve a single feedback entry by ID. Returns full detail including screenshot with visual annotations.',
    {
      feedbackId: z.string(),
    },
    async (input: any) => {
      return await getToolHandler(client, input);
    }
  );

  // Register update tool - required feedbackId and status
  (server as any).tool(
    'update',
    'Update the status of a feedback record to support triage workflows. Status usage guidelines: "pending" is reselved for initial inbound state. Set "active" when you start/resume developing/actioning. Set "review" when feedback is addressed and ready for UAT. Set "resolved" when UAT/user approves. Only set "rejected" when requested by the user.',
    {
      feedbackId: z.string(),
      status: z.enum(ALLOWED_STATUSES as any),
    },
    async (input: any) => {
      return await updateToolHandler(client, input);
    }
  );
}

/**
 * Bootstrap and start the feedback MCP server over stdio transport.
 */
export async function startServer(): Promise<void> {
  const server = new McpServer(
    { name: 'annotated-feedback', version: '0.1.19' },
    {
      instructions:
        'Use the feedback tools to review, visually inspect, and update UX feedback.',
    }
  );

  registerFeedbackTools(server);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

// Start the server immediately (bin scripts are never imported as modules)
startServer().catch((error) => {
  console.error('[annotated-feedback] Failed to start server:', error);
  process.exitCode = 1;
});
