import { FC } from 'react';

import { initializeApp } from 'firebase/app';
import { IonApp, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import { Bootstrap, BootstrapProps } from '@bootstrap/components';

import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import { Router } from './Router';

setupIonicReact();

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
    <IonApp>
      <Router />
    </IonApp>
  </Bootstrap>
);

export default App;
