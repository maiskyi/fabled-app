import { FC } from 'react';

import { IonButtons, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Color } from '@ionic/core';

interface HeaderBackProps {
  pathname?: string;
  color?: Color;
}

export const HeaderBack: FC<HeaderBackProps> = ({
  pathname,
  color = 'tertiary',
}) => {
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
      <IonButton color={color} mode="md" onClick={handleOnClick}>
        <IonIcon icon={arrowBack} slot="icon-only" />
      </IonButton>
    </IonButtons>
  );
};
