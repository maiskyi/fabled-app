import React from 'react';
import { createRoot } from 'react-dom/client';

import { Language } from '@locale/constants';
import { resources } from '@locale/resources';

import { App, AppProps } from './App';

const config: AppProps = {
  localization: {
    resources,
    fallbackLng: Language.en,
    supportedLngs: [Language.en],
  },
  functions: {
    emulator: {
      host: import.meta.env.VITE_FIREBASE_FUNCTIONS_EMULATOR_HOST,
      port: import.meta.env.VITE_FIREBASE_FUNCTIONS_EMULATOR_PORT,
    },
  },
  firestore: {
    emulator: {
      host: import.meta.env.VITE_FIREBASE_FIRESTORE_EMULATOR_HOST,
      port: import.meta.env.VITE_FIREBASE_FIRESTORE_EMULATOR_PORT,
    },
  },
  app: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  },
};

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App {...config} />
  </React.StrictMode>
);
