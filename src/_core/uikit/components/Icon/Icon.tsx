import { FC, ComponentProps, forwardRef } from 'react';

import { IonIcon } from '@ionic/react';

import { IconName } from './Icon.types';
import { ICON } from './Icon.const';

export interface IconProps {
  slot?: string;
  name: IconName;
  className?: string;
  size?: ComponentProps<typeof IonIcon>['size'];
}

export const Icon: FC<IconProps> = forwardRef<any, IconProps>(function Icon(
  { size, name, slot, className },
  ref
) {
  return (
    <IonIcon
      className={className}
      icon={ICON[name]}
      ref={ref}
      size={size}
      slot={slot}
    />
  );
});
