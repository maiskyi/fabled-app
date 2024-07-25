import { memo } from 'react';

import { setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Root } from './root/routes/Root/Root';

setupIonicReact();

export const Router = memo(() => {
  return (
    <IonReactRouter>
      <Root />
    </IonReactRouter>
  );
});

Router.displayName = 'Router';
