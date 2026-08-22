import { defineConfig } from 'tsup';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  clean: true,
  treeshake: true,
  external: ['react', 'react-dom', '@devigner-ui/icons'],
  onSuccess: async () => {
    // Copy metadata, embeddings, styles from free package
    const files = ['metadata.json', 'embeddings.json', 'styles.css'];
    for (const file of files) {
      const src = path.resolve('../icons/dist', file);
      const dest = path.resolve('dist', file);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to dist/`);
      }
    }
  },
  esbuildOptions(options) {
    options.alias = {
      ...options.alias,
      '@devigner-ui/icons': '../icons/src',
    };
  },
  tsconfig: 'tsconfig.json',
});