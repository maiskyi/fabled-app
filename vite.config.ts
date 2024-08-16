/// <reference types="vitest" />

import path from 'path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import packageJson from './package.json';

export default defineConfig({
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
  },
  plugins: [react(), legacy()],
  resolve: {
    alias: {
      '@bootstrap': path.resolve(__dirname, './src/_bootstrap'),
      '@core': path.resolve(__dirname, './src/_core'),
      '@locale': path.resolve(__dirname, './src/_locale'),
      '@network': path.resolve(__dirname, './src/_network'),
    },
  },
});
