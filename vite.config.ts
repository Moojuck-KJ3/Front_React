import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodePolyfills(), react()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      'readable-stream': 'vite-compatible-readable-stream',
    },
  },
});
