import { FC } from 'react';

import { IonButton } from '@ionic/react';

import { Icon, IconName } from '../../Icon';

interface HeaderActionProps {
  icon: IconName;
  onClick?: () => void;
}

export const HeaderAction: FC<HeaderActionProps> = ({ icon, onClick }) => {
  return (
    <IonButton color="tertiary" onClick={onClick}>
      <Icon name={icon} slot="icon-only" />
    </IonButton>
  );
};
