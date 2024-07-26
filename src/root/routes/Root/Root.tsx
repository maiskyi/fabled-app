import { Route } from 'react-router-dom';
import { memo } from 'react';

import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import { RoutePath } from '@bootstrap/constants';

import Tab1 from '../../../pages/Tab1';
import Tab3 from '../../../pages/Tab3';
import { Create } from '../../../create/routes';

setupIonicReact();

export const Root = memo(() => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path={RoutePath.Home}>
          <Tab1 />
        </Route>
        <Route exact path={RoutePath.Create}>
          <Create />
        </Route>
        <Route exact path={RoutePath.Profile}>
          <Tab3 />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href={RoutePath.Home}>
          <IonIcon aria-hidden="true" icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href={RoutePath.Create}>
          <IonIcon aria-hidden="true" icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href={RoutePath.Profile}>
          <IonIcon aria-hidden="true" icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
});

Root.displayName = 'Router';
