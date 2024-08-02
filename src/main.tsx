import React from 'react';
import { createRoot } from 'react-dom/client';

import { App, AppProps } from './App';

const config: AppProps = {
  functions: {
    // emulator: {
    //   host: '127.0.0.1',
    //   port: 5001,
    // },
  },
  firestore: {
    // emulator: {
    //   host: '127.0.0.1',
    //   port: 8080,
    // },
  },
  app: {
    apiKey: 'AIzaSyBtHvYr_zbv8vRsTI6BEuPFMAq8lAsqmcc',
    authDomain: 'fabled-976c8.firebaseapp.com',
    projectId: 'fabled-976c8',
    storageBucket: 'fabled-976c8.appspot.com',
    messagingSenderId: '325556814897',
    appId: '1:325556814897:web:b9333358b6d5cb93960110',
    measurementId: 'G-C3GFTX5S4Z',
  },
};

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App {...config} />
  </React.StrictMode>
);
