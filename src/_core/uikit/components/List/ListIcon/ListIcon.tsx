import { FC } from 'react';

import { IonIcon } from '@ionic/react';
import { Color } from '@ionic/core';

import { IconName, ICON } from '../../Icon';

interface ListIconProps {
  name: IconName;
  slot?: 'start' | 'end';
  color?: Color;
}

export const ListIcon: FC<ListIconProps> = ({
  name,
  color,
  slot = 'start',
}) => {
  return (
    <IonIcon
      color={color}
      icon={ICON[name]}
      slot={slot}
      style={{ fontSize: 20 }}
    />
  );
};
