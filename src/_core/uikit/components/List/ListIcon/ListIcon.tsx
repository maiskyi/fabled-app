import { FC } from 'react';

import { IonIcon } from '@ionic/react';

import { IconName, ICON } from '../../Icon';

interface ListIconProps {
  name: IconName;
  slot?: 'start' | 'end';
}

export const ListIcon: FC<ListIconProps> = ({ name, slot = 'start' }) => {
  return <IonIcon slot={slot} icon={ICON[name]} />;
};
