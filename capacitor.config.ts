/// <reference types="@capacitor-firebase/authentication" />

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Fabled Space',
  webDir: 'dist',
  FirebaseAuthentication: {
    skipNativeAuth: false,
    providers: ['apple.com', 'facebook.com', 'google.com'],
  },
};

export default config;
