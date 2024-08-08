import { FC } from 'react';

import { IonButton } from '@ionic/react';

import { Icon, IconName } from '../../Icon';

interface HeaderActionProps {
  icons: IconName;
  onClick?: () => void;
}

export const HeaderAction: FC<HeaderActionProps> = ({ icons, onClick }) => {
  return (
    <IonButton onClick={onClick}>
      <Icon name={icons} slot="icon-only" />
    </IonButton>
  );
};
