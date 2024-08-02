import { FC } from 'react';

import { IonButtons, IonButton, IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

interface HeaderBackProps {
  onClick: () => void;
}

export const HeaderBack: FC<HeaderBackProps> = ({ onClick }) => {
  return (
    <IonButtons slot="start">
      <IonButton mode="md" onClick={onClick}>
        <IonIcon slot="icon-only" icon={arrowBack} />
      </IonButton>
    </IonButtons>
  );
};
