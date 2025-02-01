import React from 'react';
import { createRoot } from 'react-dom/client';

import { Language } from '@locale/constants';
import { resources } from '@locale/resources';

import { App, AppProps } from './App';

const config: AppProps = {
  bootstrap: {
    analytics: {
      dataUrl: import.meta.env.VITE_RUDDERSTACK_DATA_URL,
      enabled: import.meta.env.VITE_ENVIRONMENT === 'production',
      environment: import.meta.env.VITE_ENVIRONMENT,
      version: import.meta.env.PACKAGE_VERSION,
      writeKey: import.meta.env.VITE_RUDDERSTACK_WRITE_KEY,
    },
    app: {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    },
    auth: {},
    config: {
      version: import.meta.env.PACKAGE_VERSION,
    },
    errorBoundary: {
      dsn: import.meta.env.VITE_SENTRY_DNS,
      enabled: import.meta.env.VITE_ENVIRONMENT !== 'local',
      environment: import.meta.env.VITE_ENVIRONMENT,
      release: import.meta.env.PACKAGE_VERSION,
    },
    localization: {
      fallbackLng: Language.en,
      resources,
      supportedLngs: [Language.en],
    },
    network: {
      api: {
        endpoint: import.meta.env.VITE_API_ENDPOINT,
      },
    },
    purchases: {
      apiKey: import.meta.env.VITE_REVENUECAT_API_KEY,
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
