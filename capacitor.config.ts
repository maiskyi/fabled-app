/// <reference types="@capacitor-firebase/authentication" />

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  FirebaseAuthentication: {
    providers: ['apple.com', 'facebook.com', 'google.com'],
    skipNativeAuth: false,
  },
  appId: 'io.ionic.starter',
  appName: 'Fabled Space',
  webDir: 'dist',
};

export default config;
