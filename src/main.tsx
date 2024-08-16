import React from 'react';
import { createRoot } from 'react-dom/client';

import { Language } from '@locale/constants';
import { resources } from '@locale/resources';
import { Splash } from '@bootstrap/components';

import { App, AppProps } from './App';

const splash = <Splash />;

const config: AppProps = {
  bootstrap: {
    app: {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    },
    auth: {
      fallback: splash,
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
      fallback: splash,
      fallbackLng: Language.en,
      resources,
      supportedLngs: [Language.en],
    },
    network: {
      contentful: {
        apiKey: import.meta.env.VITE_CONTENTFUL_API_KEY,
        environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      },
    },
  },
  init: {
    data: {
      fallback: splash,
    },
  },
};

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App {...config} />
  </React.StrictMode>
);
