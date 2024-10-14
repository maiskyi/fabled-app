import { FC, PropsWithChildren } from 'react';

import { IonBadge } from '@ionic/react';
import { Color } from '@ionic/core';

export type BadgeProps = PropsWithChildren<{
  color?: Color;
  className?: string;
}>;

export const Badge: FC<BadgeProps> = ({ children, color, className }) => {
  return (
    <IonBadge className={className} color={color}>
      {children}
    </IonBadge>
  );
};
