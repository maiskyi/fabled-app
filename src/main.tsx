import React from 'react';
import { createRoot } from 'react-dom/client';

import { Language } from '@locale/constants';
import { resources } from '@locale/resources';
import { Splash } from '@bootstrap/components';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

import { App, AppProps } from './App';

if (import.meta.env.DEV) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

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
      Loader: Splash,
    },
    config: {
      Loader: Splash,
      version: import.meta.env.PACKAGE_VERSION,
    },
    errorBoundary: {
      dsn: import.meta.env.VITE_SENTRY_DNS,
      enabled: true,
      environment: import.meta.env.VITE_ENVIRONMENT,
      release: import.meta.env.PACKAGE_VERSION,
    },
    localization: {
      Loader: Splash,
      fallbackLng: Language.en,
      resources,
      supportedLngs: [Language.en],
    },
    network: {
      admin: {
        endpoint: import.meta.env.VITE_ADMIN_ENDPOINT,
        subscription: import.meta.env.VITE_ADMIN_SUBSCRIPTION,
      },
      api: {
        endpoint: import.meta.env.VITE_API_ENDPOINT,
      },
    },
    purchases: {
      Loader: Splash,
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
