import React from 'react';
import { createRoot } from 'react-dom/client';

import { Language } from '@locale/constants';
import { resources } from '@locale/resources';

import { App, AppProps } from './App';

const config: AppProps = {
  app: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  },
  firestore: {
    emulator: {
      host: import.meta.env.VITE_FIREBASE_FIRESTORE_EMULATOR_HOST,
      port: import.meta.env.VITE_FIREBASE_FIRESTORE_EMULATOR_PORT,
    },
  },
  functions: {
    emulator: {
      host: import.meta.env.VITE_FIREBASE_FUNCTIONS_EMULATOR_HOST,
      port: import.meta.env.VITE_FIREBASE_FUNCTIONS_EMULATOR_PORT,
    },
  },
  localization: {
    fallbackLng: Language.en,
    resources,
    supportedLngs: [Language.en],
  },
};

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App {...config} />
  </React.StrictMode>
);
