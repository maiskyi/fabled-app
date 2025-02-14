/// <reference types="@capacitor-firebase/authentication" />

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.fabled.space',
  appName: 'Lupi',
  plugins: {
    FirebaseAuthentication: {
      providers: ['google.com', 'apple.com', 'facebook.com'],
      skipNativeAuth: false,
    },
    SplashScreen: {
      launchAutoHide: false,
      launchShowDuration: 3000,
    },
  },
  webDir: 'dist',
};

export default config;
