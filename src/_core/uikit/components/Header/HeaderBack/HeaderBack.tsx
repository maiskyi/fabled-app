import { FC } from 'react';

import { IonButtons, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

interface HeaderBackProps {
  pathname?: string;
}

export const HeaderBack: FC<HeaderBackProps> = ({ pathname: _ }) => {
  const router = useIonRouter();

  const handleOnClick = () => {
    if (router.canGoBack()) {
      return router.goBack();
    }
  };

  return (
    <IonButtons slot="start">
      <IonButton mode="md" onClick={handleOnClick}>
        <IonIcon slot="icon-only" icon={arrowBack} />
      </IonButton>
    </IonButtons>
  );
};
