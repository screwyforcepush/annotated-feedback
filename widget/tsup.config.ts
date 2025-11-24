import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  // Externalize peer dependencies - use parent app's versions
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'convex',
    'convex/react',
    '@excalidraw/excalidraw',
    'html-to-image',
  ],
  // Don't bundle these - they should come from the consuming app
  noExternal: [],
});
