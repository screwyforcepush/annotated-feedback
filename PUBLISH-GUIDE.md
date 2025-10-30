# Publishing Guide - annotated-feedback

**Package Name**: `annotated-feedback`
**NPM Registry**: https://www.npmjs.com/package/annotated-feedback
**Current Version**: 0.1.14

---

## ⚠️ CRITICAL: Package Structure

This is a **monorepo package** with subpath exports:

```
annotated-feedback/
├── convex/          # Convex backend functions
├── widget/          # React widget (subpath: annotated-feedback/widget)
├── mcp/             # MCP server (bin: annotated-feedback)
└── package.json     # Root package.json (THIS is what we publish)
```

**DO NOT** publish `widget/` or `mcp/` as separate npm packages!

Users import via:
```typescript
import { FeedbackProvider } from 'annotated-feedback/widget';
import 'annotated-feedback/widget/styles';
```

---

## Pre-Publish Checklist

- [ ] All changes committed and pushed
- [ ] Tests passing
- [ ] Widget and MCP built successfully
- [ ] Version bumped in both `package.json` and `mcp/src/server.ts`
- [ ] Git working tree clean

---

## Step-by-Step Publishing Process

### Step 1: Verify Current State

```bash
# Check current version
cat package.json | grep version
# Should show: "version": "0.1.14"

# Check git status
git status
# Should be clean (no uncommitted changes)

# Check npm login
npm whoami
# Should show: savagenpm
```

### Step 2: Determine Version Bump Type

Use semantic versioning:

- **Patch** (0.1.14 → 0.1.15): Bug fixes, small improvements
- **Minor** (0.1.14 → 0.2.0): New features, non-breaking changes
- **Major** (0.1.14 → 1.0.0): Breaking changes

For most updates, use **patch**.

### Step 3: Bump Version Numbers

You must update version in **TWO places**:

#### 3a. Update package.json

```bash
# For patch version
npm version patch --no-git-tag-version

# For minor version
npm version minor --no-git-tag-version

# For major version
npm version major --no-git-tag-version
```

Or manually edit:
```json
{
  "name": "annotated-feedback",
  "version": "0.1.15",  // ← Update this
  ...
}
```

#### 3b. Update MCP Server Version

Edit `mcp/src/server.ts` and update the version annotation:

```typescript
export async function startServer(): Promise<void> {
  const server = new McpServer(
    { name: 'annotated-feedback', version: '0.1.15' },  // ← Update this
    ...
```

**Make sure both versions match!**

### Step 4: Install Dependencies (if needed)

```bash
pnpm install
```

### Step 5: Build the Package

This builds both widget and MCP:

```bash
pnpm build
```

**Expected output:**
```
✓ Widget built: widget/dist/
  - index.js (CJS)
  - index.mjs (ESM)
  - index.d.ts (TypeScript defs)
  - styles.css

✓ MCP built: mcp/dist/
  - server.js
  - tools/
```

**If build fails:**
- For Convex errors: Skip codegen and build widget/MCP directly:
  ```bash
  pnpm widget:build
  pnpm mcp:build
  ```

### Step 6: Verify Build Output

```bash
ls -lah widget/dist/
# Should show: index.js, index.mjs, index.d.ts, index.d.mts, styles.css

ls -lah mcp/dist/
# Should show: server.js, tools/, convex-client.js, etc.
```

### Step 7: Test Package Structure (Dry Run)

```bash
npm publish --dry-run
```

**Verify the output includes:**
- `convex/` files
- `widget/dist/` files
- `mcp/dist/` files
- Total files: ~47

**Common issues:**
- If `widget/dist/` is missing: Run `pnpm widget:build`
- If `mcp/dist/` is missing: Run `pnpm mcp:build`

### Step 8: Commit Version Bump

```bash
git add package.json mcp/src/server.ts widget/dist/ mcp/dist/

git commit -m "Bump annotated-feedback to v0.1.15

Changes:
- [Describe what changed in this release]
- [List major fixes or features]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### Step 9: Push to Remote

```bash
git push
```

### Step 10: Publish to NPM

```bash
npm publish --access public
```

**Expected output:**
```
+ annotated-feedback@0.1.15
📦  annotated-feedback@0.1.15
...
Publishing to https://registry.npmjs.org/ with tag latest and public access
```

### Step 11: Verify Publication

```bash
npm view annotated-feedback version
# Should show: 0.1.15

npm view annotated-feedback
# Review full package details
```

### Step 12: Test Installation

In a test project:

```bash
npm install annotated-feedback@latest

# Verify subpath imports work
node -e "require('annotated-feedback/widget')"
```

---

## Common Issues & Solutions

### Issue: "No CONVEX_DEPLOYMENT set"

**Solution:** Build widget and MCP directly:
```bash
pnpm widget:build
pnpm mcp:build
```

### Issue: "TypeScript errors in widget/src/types.ts"

**Solution:** The widget uses standalone Convex types now. Errors about `_generated/dataModel` are expected during standalone builds but don't block the build.

### Issue: Published wrong package name

**Symptoms:** Published `annotated-feedback-widget` instead of `annotated-feedback`

**Solution:**
1. Deprecate wrong package:
   ```bash
   npm deprecate annotated-feedback-widget@VERSION "Use 'annotated-feedback' with import from 'annotated-feedback/widget'"
   ```
2. Publish correct package from `annotated-feedback/` directory

### Issue: Version mismatch between package.json and MCP server

**Solution:**
- Check both files match:
  ```bash
  cat package.json | grep version
  cat mcp/src/server.ts | grep version
  ```
- Update both to same version

### Issue: Missing dist/ folders in published package

**Solution:**
- Ensure both `widget/dist/` and `mcp/dist/` exist before publishing
- Run builds: `pnpm widget:build && pnpm mcp:build`
- Commit dist folders to git (they're tracked in this package)

---

## Rollback Procedure

If you need to unpublish or rollback:

### Unpublish (within 72 hours)

```bash
# Unpublish specific version
npm unpublish annotated-feedback@0.1.15

# Note: Can't unpublish last remaining version without --force
```

### Deprecate Instead

```bash
npm deprecate annotated-feedback@0.1.15 "This version has issues, please use 0.1.14"
```

### Revert Git Commit

```bash
git revert HEAD
git push
```

---

## Version History Template

When publishing, add an entry to this section:

### v0.1.15 - YYYY-MM-DD
- **Changes**: [Brief description]
- **Fixes**: [Bug fixes]
- **Breaking Changes**: [If any]

### v0.1.14 - 2025-10-22
- **Changes**: Migrated screenshot capture from html2canvas to html-to-image
- **Fixes**: Fixed text vertical alignment and border rendering artifacts in screenshots
- **Fixes**: Added viewport constraints to capture only visible area
- **Technical**: Removed Convex codegen dependency from widget builds

### v0.1.13 - [Previous release]
- Initial published version with widget, MCP, and Convex backend

---

## Package Exports Reference

### For Widget Users

```typescript
// Import widget components
import { FeedbackProvider, FeedbackOverlay } from 'annotated-feedback/widget';

// Import styles
import 'annotated-feedback/widget/styles';

// Import types
import type { FeedbackMetadata, ScreenshotOptions } from 'annotated-feedback/widget';
```

### For MCP Users

```bash
# Run MCP server
npx annotated-feedback

# Or install globally
npm install -g annotated-feedback
annotated-feedback
```

### For Convex Backend

```typescript
// Convex functions are in the package but meant for Convex deployment
// Users copy convex/ folder to their own Convex project
```

---

## Pre-Flight Checklist

Before every publish, verify:

- [ ] Version bumped in `package.json`
- [ ] Version bumped in `mcp/src/server.ts`
- [ ] `pnpm widget:build` completed successfully
- [ ] `pnpm mcp:build` completed successfully
- [ ] `widget/dist/` exists with 5 files
- [ ] `mcp/dist/` exists with server.js and tools/
- [ ] `npm publish --dry-run` shows ~47 files
- [ ] Git working tree clean
- [ ] Changes committed and pushed
- [ ] Logged into npm as `savagenpm`

---

## Support

- **NPM Package**: https://www.npmjs.com/package/annotated-feedback
- **GitHub**: https://github.com/screwyforcepush/annotated-feedback
- **Issues**: https://github.com/screwyforcepush/annotated-feedback/issues

---

**Last Updated**: 2025-10-22
**Maintainer**: savagenpm
