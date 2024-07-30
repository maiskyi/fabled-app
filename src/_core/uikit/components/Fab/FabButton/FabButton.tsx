import { FC, PropsWithChildren } from 'react';

import { IonFabButton, IonIcon } from '@ionic/react';

import { IconName, ICON } from '../../Icon';

type FabButtonProps = PropsWithChildren<{
  icon?: IconName;
  onClick?: () => void;
}>;

export const FabButton: FC<FabButtonProps> = ({ icon, onClick, children }) => {
  return (
    <IonFabButton onClick={onClick}>
      {!!icon && <IonIcon icon={ICON[icon]} />}
      {children}
    </IonFabButton>
  );
};
