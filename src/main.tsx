import React from 'react';
import { createRoot } from 'react-dom/client';

import { App, AppProps } from './App';

const config: AppProps = {
  functions: {
    emulator: {
      host: '127.0.0.1',
      port: 5001,
    },
  },
  firestore: {
    emulator: {
      host: '127.0.0.1',
      port: 8080,
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
