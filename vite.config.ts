/// <reference types="vitest" />

import path from 'path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@bootstrap': path.resolve(__dirname, './src/_bootstrap'),
      '@core': path.resolve(__dirname, './src/_core'),
    },
  },
  plugins: [react(), legacy()],
});
