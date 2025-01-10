/// <reference types="vitest" />

import path from 'path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
// import basicSsl from '@vitejs/plugin-basic-ssl';

import packageJson from './package.json';

export default defineConfig({
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version),
  },
  plugins: [
    react(),
    legacy(),
    svgr(),
    // basicSsl()
  ],
  resolve: {
    alias: {
      '@bootstrap': path.resolve(__dirname, './src/_bootstrap'),
      '@common': path.resolve(__dirname, './src/_common'),
      '@core': path.resolve(__dirname, './src/_core'),
      '@locale': path.resolve(__dirname, './src/_locale'),
      '@network': path.resolve(__dirname, './src/_network'),
    },
  },
});
