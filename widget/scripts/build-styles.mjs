import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

async function ensureDist() {
  await fs.mkdir(distDir, { recursive: true });
}

async function copyFileSafe(source, target, label) {
  await fs.copyFile(source, target);
  console.log(`[annotated-feedback] Copied ${label} -> ${path.relative(rootDir, target)}`);
}

async function resolveExcalidrawCss() {
  const entryPath = require.resolve('@excalidraw/excalidraw');
  const entryDir = path.dirname(entryPath);
  return path.join(entryDir, 'index.css');
}

/**
 * Strip @font-face rules from CSS content to avoid missing font file errors.
 * Excalidraw uses Assistant font, but we don't need it for the feedback widget
 * since the widget has its own text input (we only use Excalidraw's canvas).
 */
function stripFontFaceRules(cssContent) {
  return cssContent.replace(/@font-face\s*\{[^}]*\}/g, '');
}

async function processExcalidrawCss(source, target) {
  const content = await fs.readFile(source, 'utf-8');
  const processed = stripFontFaceRules(content);
  await fs.writeFile(target, processed, 'utf-8');
  console.log(`[annotated-feedback] Processed Excalidraw styles (stripped @font-face) -> ${path.relative(rootDir, target)}`);
}

async function main() {
  try {
    await ensureDist();

    const baseCssSource = path.join(rootDir, 'src', 'styles.css');
    const baseCssTarget = path.join(distDir, 'styles.css');
    await copyFileSafe(baseCssSource, baseCssTarget, 'widget styles');

    const excalidrawCssSource = await resolveExcalidrawCss();
    const excalidrawCssTarget = path.join(distDir, 'excalidraw.css');
    await processExcalidrawCss(excalidrawCssSource, excalidrawCssTarget);
  } catch (error) {
    console.error('[annotated-feedback] Failed to build styles:', error);
    process.exitCode = 1;
  }
}

main();
