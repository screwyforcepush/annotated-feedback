# Publishing Guide - annotated-feedback

**Package Name**: `annotated-feedback`
**NPM Registry**: https://www.npmjs.com/package/annotated-feedback
**Current Version**: 0.1.19

---

## 🚨 CRITICAL: The Build Step

**Version 0.1.18 was broken because the MCP server was NOT rebuilt after bumping the version!**

The published package contained:
- ✅ `package.json` with version 0.1.18
- ✅ `mcp/src/server.ts` with version 0.1.18
- ❌ `mcp/dist/server.js` **still had version 0.1.17** (stale!)

**ALWAYS verify all three versions match before publishing:**
```bash
# Check all three version locations
echo "package.json:" && grep '"version"' package.json
echo "source:" && grep "version: '0\\.1\\." mcp/src/server.ts
echo "COMPILED (this is what users get!):" && grep "version: '0\\.1\\." mcp/dist/server.js
```

If the compiled version doesn't match, **STOP and rebuild!**

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

## 📋 Quick Reference Workflow

**TL;DR - The essential steps to publish without breaking anything:**

```bash
# 1. Bump version in package.json
npm version patch --no-git-tag-version

# 2. Update version in mcp/src/server.ts (line 65)
# Edit manually to match package.json version

# 3. Install dependencies (if needed)
pnpm install
cd widget && pnpm install
cd ../mcp && pnpm install
cd ..

# 4. BUILD EVERYTHING (DO NOT SKIP!)
pnpm widget:build
pnpm mcp:build

# 5. VERIFY VERSIONS MATCH
echo "package.json:" && grep '"version"' package.json
echo "source:" && grep "version: '0\\.1\\." mcp/src/server.ts
echo "COMPILED:" && grep "version: '0\\.1\\." mcp/dist/server.js
# ☝️ ALL THREE MUST SHOW THE SAME VERSION!

# 6. Test package contents
npm publish --dry-run
# Should show ~48 files, ~370KB

# 7. Commit and push
git add package.json mcp/src/server.ts mcp/tsconfig.json pnpm-lock.yaml
git commit -m "Bump to vX.Y.Z - <description>"
git push

# 8. Publish
npm whoami  # Verify: savagenpm
npm publish --access public

# 9. Verify
npm view annotated-feedback version
```

---

## Pre-Publish Checklist

- [ ] All changes committed and pushed
- [ ] Tests passing
- [ ] **Widget built successfully** (`pnpm widget:build`)
- [ ] **MCP built successfully** (`pnpm mcp:build`)
- [ ] Version bumped in `package.json`
- [ ] Version bumped in `mcp/src/server.ts`
- [ ] **CRITICAL: Version in `mcp/dist/server.js` matches package.json**
- [ ] Git working tree clean
- [ ] Dry run shows ~48 files

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

### Step 4: Install Dependencies

```bash
# Install root dependencies
pnpm install

# Install widget dependencies
cd widget && pnpm install && cd ..

# Install MCP dependencies
cd mcp && pnpm install && cd ..
```

### Step 5: 🚨 BUILD THE PACKAGE (CRITICAL!)

**This is the step that was skipped in v0.1.18, causing a broken release!**

Build both widget and MCP:

```bash
# Build widget
pnpm widget:build

# Build MCP server (CRITICAL - this compiles mcp/src/ to mcp/dist/)
pnpm mcp:build
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

### Step 6: 🔍 VERIFY VERSION CONSISTENCY (MANDATORY!)

**This verification would have caught the v0.1.18 bug!**

```bash
echo "=== Checking all three version locations ==="
echo "package.json version:"
grep '"version"' package.json

echo -e "\nmcp/src/server.ts version:"
grep "version: '0\\.1\\." mcp/src/server.ts

echo -e "\nmcp/dist/server.js version (COMPILED - THIS IS WHAT USERS GET!):"
grep "version: '0\\.1\\." mcp/dist/server.js

echo -e "\n✅ ALL THREE MUST MATCH!"
```

**If `mcp/dist/server.js` shows a different version:**
- ❌ **STOP! Do not proceed with publishing!**
- The MCP server was not rebuilt after version bump
- Run `pnpm mcp:build` again
- Re-verify all three versions match

### Step 7: Verify Build Output

```bash
ls -lah widget/dist/
# Should show: index.js, index.mjs, index.d.ts, index.d.mts, styles.css

ls -lah mcp/dist/
# Should show: server.js, tools/, convex-client.js, etc.
```

### Step 8: Test Package Structure (Dry Run)

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

### Step 9: Commit Version Bump

```bash
git add package.json mcp/src/server.ts mcp/tsconfig.json pnpm-lock.yaml

git commit -m "Bump annotated-feedback to v0.1.XX

Changes:
- [Describe what changed in this release]
- [List major fixes or features]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### Step 10: Push to Remote

```bash
git push
```

### Step 11: Publish to NPM

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

### Step 12: Verify Publication

```bash
npm view annotated-feedback version
# Should show the new version

npm view annotated-feedback
# Review full package details
```

### Step 13: Test Installation

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

## Version History

When publishing, add an entry to this section:

### v0.1.19 - 2025-11-19
- **Critical Fix**: Fixed broken MCP server from v0.1.18
- **Root Cause**: v0.1.18 published with stale `mcp/dist/server.js` (compiled from v0.1.17 source)
- **Fix**: Rebuilt MCP server with correct version, added version verification to publish guide
- **Technical**: Updated tsconfig.json to exclude test files from MCP build

### v0.1.18 - 2025-11-19 ⚠️ BROKEN - DO NOT USE
- **Status**: Broken - MCP server fails to connect
- **Issue**: Package published without rebuilding MCP server after version bump
- **Result**: `package.json` shows v0.1.18 but `mcp/dist/server.js` contains v0.1.17
- **Resolution**: Use v0.1.19 instead

### v0.1.17 - [Date Unknown]
- **Status**: Working (last known good version before v0.1.18)
- **Issue**: Package was bloated (282 files, 13.7 MB instead of ~48 files, ~370 KB)
- Likely included unnecessary files in publish

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
