import { FC } from 'react';

import { IonBackButton, IonButtons } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

interface HeaderBackProps {
  defaultHref?: string;
}

export const HeaderBack: FC<HeaderBackProps> = ({ defaultHref }) => {
  return (
    <IonButtons slot="start">
      <IonBackButton
        mode="md"
        icon={arrowBack}
        routerAnimation={null}
        defaultHref={defaultHref}
      />
    </IonButtons>
  );
};
