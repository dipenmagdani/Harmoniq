import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      port: 5173,
      ...(mode === 'development' && {
        proxy: {
          '/api': {
            target: env.VITE_API_URL,
            changeOrigin: true,
            secure: false,
          },
          '/user': {
            target: env.VITE_API_URL, // Same or different URL if needed
            changeOrigin: true,
            secure: false,
          },
        },
      }),
    },
  };
});
