/**
 * ConvexClient - HTTP API Wrapper for Convex
 *
 * Pure HTTP client for calling Convex queries and mutations without the Convex SDK.
 * Designed for use in MCP servers where the full SDK is not needed.
 *
 * Architecture:
 * - Zero business logic (pure HTTP wrapper)
 * - No Convex SDK dependency
 * - Optional authentication via AGENT_SECRET header
 * - Comprehensive error handling with actionable messages
 */

/**
 * Error thrown when a Convex API call fails
 */
export class ConvexError extends Error {
  constructor(
    message: string,
    public readonly statusCode?: number,
    public readonly response?: unknown
  ) {
    super(message);
    this.name = 'ConvexError';
  }
}

/**
 * Options for configuring the ConvexClient
 */
export interface ConvexClientOptions {
  /**
   * Base URL of the Convex deployment (e.g., "https://your-deployment.convex.cloud")
   */
  convexUrl: string;

  /**
   * Optional authentication secret for agent access
   * Set via AGENT_SECRET environment variable
   */
  agentSecret?: string;

  /**
   * Optional project identifier to scope all feedback queries
   * Set via PROJECT environment variable
   */
  project?: string;

  /**
   * Request timeout in milliseconds (default: 30000)
   */
  timeout?: number;
}

/**
 * JSON-RPC request format for Convex HTTP API
 */
interface ConvexRequest {
  path: string;
  args: Record<string, unknown>;
}

const DEFAULT_TIMEOUT_MS = 30_000;

/**
 * HTTP client for Convex backend operations
 *
 * Provides query and mutation methods that communicate with Convex via HTTP API.
 * Uses JSON-RPC format for all requests.
 *
 * @example
 * ```typescript
 * const client = new ConvexClient({
 *   convexUrl: 'https://your-deployment.convex.cloud',
 *   agentSecret: process.env.AGENT_SECRET
 * });
 *
 * // Query feedback records
 * const records = await client.query('feedback:listByStatus', {
 *   status: 'pending',
 *   limit: 10
 * });
 *
 * // Update feedback status
 * await client.mutation('feedback:updateStatus', {
 *   feedbackId: 'px77r379s6hj6r3krxk0zw43z97smtn1',
 *   status: 'review'
 * });
 * ```
 */
export class ConvexClient {
  private readonly convexUrl: string;
  private readonly agentSecret?: string;
  private readonly _project?: string;
  private readonly timeout: number;

  constructor(options: ConvexClientOptions) {
    // Validate and normalize convexUrl
    if (!options.convexUrl) {
      throw new ConvexError(
        'ConvexClient requires a convexUrl. Provide the URL to your Convex deployment.'
      );
    }

    // Remove trailing slash for consistent URL construction
    this.convexUrl = options.convexUrl.replace(/\/$/, '');
    this.agentSecret = options.agentSecret;
    this._project = options.project;
    this.timeout = options.timeout ?? DEFAULT_TIMEOUT_MS;

    // Validate URL format
    try {
      new URL(this.convexUrl);
    } catch (error) {
      throw new ConvexError(
        `Invalid convexUrl format: "${options.convexUrl}". Expected a valid URL like "https://your-deployment.convex.cloud"`
      );
    }
  }

  /**
   * Get the configured project identifier (if set)
   */
  get project(): string | undefined {
    return this._project;
  }

  /**
   * Execute a Convex query via HTTP API
   *
   * Queries are read-only operations that retrieve data from the database.
   * They are executed via POST to /api/query endpoint.
   *
   * @param path - Convex function path (e.g., "feedback:listByStatus")
   * @param args - Function arguments as key-value pairs
   * @returns Query result (type depends on the specific query)
   *
   * @throws {ConvexError} If the request fails or returns an error
   *
   * @example
   * ```typescript
   * const pending = await client.query('feedback:listByStatus', {
   *   status: 'pending',
   *   limit: 50
   * });
   * ```
   */
  async query<TResult = unknown>(
    path: string,
    args: Record<string, unknown> = {}
  ): Promise<TResult> {
    return this.request<TResult>('/api/query', { path, args });
  }

  /**
   * Execute a Convex mutation via HTTP API
   *
   * Mutations are write operations that modify data in the database.
   * They are executed via POST to /api/mutation endpoint.
   *
   * @param path - Convex function path (e.g., "feedback:updateStatus")
   * @param args - Function arguments as key-value pairs
   * @returns Mutation result (type depends on the specific mutation)
   *
   * @throws {ConvexError} If the request fails or returns an error
   *
   * @example
   * ```typescript
   * await client.mutation('feedback:updateStatus', {
   *   feedbackId: 'px77r379s6hj6r3krxk0zw43z97smtn1',
   *   status: 'resolved'
   * });
   * ```
   */
  async mutation<TResult = unknown>(
    path: string,
    args: Record<string, unknown> = {}
  ): Promise<TResult> {
    return this.request<TResult>('/api/mutation', { path, args });
  }

  /**
   * Internal method for making HTTP requests to Convex
   *
   * Handles:
   * - URL construction
   * - Request headers (Content-Type, Authentication)
   * - Timeout management
   * - Response parsing
   * - Error handling and mapping
   *
   * @private
   */
  private async request<TResult>(
    endpoint: string,
    body: ConvexRequest
  ): Promise<TResult> {
    const url = `${this.convexUrl}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      // Construct headers
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      // Add authentication if provided
      if (this.agentSecret) {
        headers['Authorization'] = `Bearer ${this.agentSecret}`;
      }

      // Make HTTP request
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle HTTP errors
      if (!response.ok) {
        const errorText = await response.text().catch(() => 'No error details available');

        // Provide actionable error messages based on status code
        if (response.status === 401 || response.status === 403) {
          throw new ConvexError(
            `Authentication failed. Check your AGENT_SECRET is correct and has proper permissions.`,
            response.status,
            errorText
          );
        }

        if (response.status === 404) {
          throw new ConvexError(
            `Convex deployment not found at "${this.convexUrl}". Verify the URL is correct.`,
            response.status,
            errorText
          );
        }

        if (response.status >= 500) {
          throw new ConvexError(
            `Convex server error (${response.status}). The backend may be temporarily unavailable. Try again later.`,
            response.status,
            errorText
          );
        }

        throw new ConvexError(
          `Convex HTTP request failed with status ${response.status}: ${errorText}`,
          response.status,
          errorText
        );
      }

      // Parse JSON response
      let data: unknown;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new ConvexError(
          `Failed to parse Convex response as JSON. The API may have returned invalid data.`,
          response.status
        );
      }

      // Check for Convex HTTP API error format: { status: "error", errorMessage: "..." }
      if (
        typeof data === 'object' &&
        data !== null &&
        'status' in data &&
        (data as { status: unknown }).status === 'error'
      ) {
        const errorData = data as { status: string; errorMessage?: string; errorData?: unknown };
        throw new ConvexError(
          `Convex function error: ${errorData.errorMessage || 'Unknown error'}`,
          response.status,
          data
        );
      }

      // Check for legacy error format: { error: "..." }
      if (
        typeof data === 'object' &&
        data !== null &&
        'error' in data &&
        typeof (data as { error: unknown }).error === 'string'
      ) {
        const errorData = data as { error: string; message?: string };
        throw new ConvexError(
          `Convex function error: ${errorData.message || errorData.error}`,
          response.status,
          data
        );
      }

      // Unwrap Convex HTTP API response format: { status: "success", value: TResult }
      if (
        typeof data === 'object' &&
        data !== null &&
        'status' in data &&
        (data as { status: unknown }).status === 'success' &&
        'value' in data
      ) {
        return (data as { value: TResult }).value;
      }

      return data as TResult;
    } catch (error) {
      clearTimeout(timeoutId);

      // Handle network errors
      if (error instanceof Error) {
        // Timeout error
        if (error.name === 'AbortError') {
          throw new ConvexError(
            `Request to Convex timed out after ${this.timeout}ms. Check your network connection or increase the timeout.`
          );
        }

        // Network connectivity error
        const message = error.message.toLowerCase();
        if (message.includes('fetch') || message.includes('network')) {
          throw new ConvexError(
            `Network error connecting to Convex at "${this.convexUrl}". Check your internet connection and verify the URL is accessible.`
          );
        }
      }

      // Re-throw ConvexError instances
      if (error instanceof ConvexError) {
        throw error;
      }

      // Wrap unexpected errors
      throw new ConvexError(
        `Unexpected error calling Convex: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
}

/**
 * Create a ConvexClient instance from environment variables
 *
 * Reads configuration from:
 * - CONVEX_URL (required): Convex deployment URL
 * - AGENT_SECRET (optional): Authentication secret
 * - PROJECT (optional): Project identifier to scope feedback queries
 * - CONVEX_TIMEOUT (optional): Request timeout in milliseconds
 *
 * @returns Configured ConvexClient instance
 * @throws {ConvexError} If CONVEX_URL is not set
 *
 * @example
 * ```typescript
 * // In your MCP server
 * const client = createConvexClientFromEnv();
 * const feedback = await client.query('feedback:list', { limit: 10 });
 * ```
 */
export function createConvexClientFromEnv(): ConvexClient {
  const convexUrl = process.env.CONVEX_URL;

  if (!convexUrl) {
    throw new ConvexError(
      'CONVEX_URL environment variable is required. Set it to your Convex deployment URL.'
    );
  }

  let timeout: number | undefined;
  const rawTimeout = process.env.CONVEX_TIMEOUT;
  if (rawTimeout !== undefined) {
    const parsedTimeout = Number(rawTimeout);
    if (Number.isFinite(parsedTimeout) && parsedTimeout > 0) {
      timeout = Math.floor(parsedTimeout);
    }
  }

  return new ConvexClient({
    convexUrl,
    agentSecret: process.env.AGENT_SECRET,
    project: process.env.PROJECT,
    timeout,
  });
}
