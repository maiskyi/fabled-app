import { FC } from 'react';

import { initializeApp } from 'firebase/app';
import { Bootstrap, BootstrapProps } from '@bootstrap/components';

import { Router } from './Router';

const app = initializeApp({
  apiKey: 'AIzaSyBtHvYr_zbv8vRsTI6BEuPFMAq8lAsqmcc',
  authDomain: 'fabled-976c8.firebaseapp.com',
  projectId: 'fabled-976c8',
  storageBucket: 'fabled-976c8.appspot.com',
  messagingSenderId: '325556814897',
  appId: '1:325556814897:web:b9333358b6d5cb93960110',
  measurementId: 'G-C3GFTX5S4Z',
});

const props: BootstrapProps = {
  auth: { app },
};

const App: FC = () => (
  <Bootstrap {...props}>
    <Router />
  </Bootstrap>
);

export default App;
