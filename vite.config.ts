import { extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { glob } from 'glob';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export default defineConfig({
  plugins: [libInjectCss(), dts({ include: ['lib'] })],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
  build: {
    cssMinify: 'lightningcss',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      // input: {
        // 'untitled-card': resolve(__dirname, 'lib/components/UntitledCard/'),
        // 'untitled-container': resolve(__dirname, 'lib/components/UntitledContainer/'),
        // 'untitled-drawer': resolve(__dirname, 'lib/components/UntitledDrawer/'),
        // 'untitled-grid': resolve(__dirname, 'lib/components/UntitledGrid/'),
        // 'untitled-message': resolve(__dirname, 'lib/components/UntitledMessage/'),
        // 'untitled-card-stack': resolve(__dirname, 'lib/compositions/UntitledCardStack/'),
        // 'index.css': resolve(__dirname, './lib/styles/index.css'),
        // 'reset.css': resolve(__dirname, './lib/styles/reset.css'),
        // 'tokens.css': resolve(__dirname, './lib/styles/tokens.css'),
        // 'typography.css': resolve(__dirname, './lib/styles/typography.css'),
        // 'utilities.css': resolve(__dirname, './lib/styles/utilities.css'),
      // },
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['lit'],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: ['lib/**/*.d.ts'],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});
