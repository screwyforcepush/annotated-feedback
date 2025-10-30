#!/bin/bash
set -e

# Annotated Feedback - Deployment Script
#
# This script deploys the annotated-feedback Convex backend to production.
# Prerequisites:
# 1. Convex project created (see MIGRATION-GUIDE.md)
# 2. .env.local configured with CONVEX_DEPLOYMENT and CONVEX_URL
# 3. Convex CLI authenticated: `npx convex login`

echo "🚀 Deploying Annotated Feedback to Convex Production"
echo "=================================================="

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
  echo "❌ Error: .env.local not found"
  echo "Please create .env.local with your Convex deployment configuration."
  echo "See MIGRATION-GUIDE.md for instructions."
  exit 1
fi

# Check if CONVEX_URL is set
source .env.local
if [ -z "$CONVEX_URL" ]; then
  echo "❌ Error: CONVEX_URL not set in .env.local"
  exit 1
fi

echo "📦 Target deployment: $CONVEX_URL"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📥 Installing dependencies..."
  pnpm install
fi

# Deploy to production
echo "🚢 Deploying Convex backend..."
npx convex deploy --prod

# Generate types
echo "🔧 Generating TypeScript types..."
npx convex codegen

echo ""
echo "✅ Deployment complete!"
echo "📊 View dashboard: https://dashboard.convex.dev"
echo "🔗 Backend URL: $CONVEX_URL"
echo ""
echo "Next steps:"
echo "  1. Build widget: cd widget && pnpm build"
echo "  2. Build MCP: cd mcp && pnpm build"
echo "  3. Update consuming apps with new Convex URL"
