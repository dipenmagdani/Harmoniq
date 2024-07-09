import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables
const env = loadEnv(process.env.NODE_ENV, process.cwd());

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
