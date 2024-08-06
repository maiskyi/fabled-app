/// <reference types="vitest" />

import path from 'path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import packageJson from './package.json';

export default defineConfig({
  resolve: {
    alias: {
      '@bootstrap': path.resolve(__dirname, './src/_bootstrap'),
      '@core': path.resolve(__dirname, './src/_core'),
    },
  },
  plugins: [react(), legacy()],
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
  },
});
