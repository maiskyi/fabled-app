import { FC, ComponentProps } from 'react';

import { IonIcon } from '@ionic/react';

import { IconName } from './Icon.types';
import { ICON } from './Icon.const';

export interface IconProps {
  slot?: string;
  name: IconName;
  className?: string;
  size?: ComponentProps<typeof IonIcon>['size'];
}

export const Icon: FC<IconProps> = ({ size, name, slot, className }) => {
  return (
    <IonIcon slot={slot} icon={ICON[name]} size={size} className={className} />
  );
};
