import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // Keep the output in /build so netlify.toml keeps working unchanged.
    outDir: 'build',
  },
});
