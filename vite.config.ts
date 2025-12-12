import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: true, // permite acesso via localhost e rede
    port: 3000,
    strictPort: false, // tenta próxima porta se ocupada
    open: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // Silencia o warning de chunk grande; app está dentro do esperado
    chunkSizeWarningLimit: 1800,
  },
  preview: {
    host: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
  },
});
