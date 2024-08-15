/// <reference types="@capacitor-firebase/authentication" />

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.fabled.space',
  appName: 'Fabled Space',
  plugins: {
    FirebaseAuthentication: {
      providers: ['google.com', 'apple.com', 'facebook.com'],
      skipNativeAuth: false,
    },
  },
  webDir: 'dist',
};

export default config;
