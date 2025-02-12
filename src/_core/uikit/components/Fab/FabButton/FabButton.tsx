import { FC, PropsWithChildren } from 'react';

import { IonFabButton, IonIcon } from '@ionic/react';
import { Color } from '@ionic/core';

import { IconName, ICON } from '../../Icon';

type FabButtonProps = PropsWithChildren<{
  icon?: IconName;
  onClick?: () => void;
  color?: Color;
}>;

export const FabButton: FC<FabButtonProps> = ({
  icon,
  onClick,
  children,
  color,
}) => {
  return (
    <IonFabButton color={color} onClick={onClick}>
      {!!icon && <IonIcon icon={ICON[icon]} />}
      {children}
    </IonFabButton>
  );
};
