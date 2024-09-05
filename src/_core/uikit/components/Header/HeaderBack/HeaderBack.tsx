import { FC } from 'react';

import { IonButtons, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

interface HeaderBackProps {
  pathname?: string;
}

export const HeaderBack: FC<HeaderBackProps> = ({ pathname }) => {
  const router = useIonRouter();

  const handleOnClick = () => {
    if (router.canGoBack()) {
      return router.goBack();
    }
    if (!router.canGoBack() && pathname) {
      return router.push(pathname, 'back', 'replace');
    }
  };

  return (
    <IonButtons slot="start">
      <IonButton color="dark" mode="md" onClick={handleOnClick}>
        <IonIcon icon={arrowBack} slot="icon-only" />
      </IonButton>
    </IonButtons>
  );
};
