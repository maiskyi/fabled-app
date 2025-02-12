import { FC, PropsWithChildren } from 'react';

import { IonFabButton, IonIcon } from '@ionic/react';
import { Color } from '@ionic/core';

import { IconName, ICON } from '../../Icon';

type FabButtonProps = PropsWithChildren<{
  icon?: IconName;
  onClick?: () => void;
  color?: Color;
  size?: 'small';
}>;

export const FabButton: FC<FabButtonProps> = ({
  icon,
  onClick,
  children,
  color,
  size,
}) => {
  return (
    <IonFabButton color={color} onClick={onClick} size={size}>
      {!!icon && <IonIcon icon={ICON[icon]} />}
      {children}
    </IonFabButton>
  );
};
