import { FC } from 'react';

import { IonButtons, IonButton, IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

interface HeaderBackProps {
  defaultHref?: string;
}

export const HeaderBack: FC<HeaderBackProps> = ({ defaultHref: _ }) => {
  return (
    <IonButtons slot="start">
      <IonButton mode="md">
        <IonIcon slot="icon-only" icon={arrowBack} />
      </IonButton>
    </IonButtons>
  );
};
