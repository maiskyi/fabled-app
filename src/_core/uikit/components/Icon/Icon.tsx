import { FC, ComponentProps, forwardRef, CSSProperties } from 'react';

import { IonIcon } from '@ionic/react';
import { Color } from '@ionic/core';

import { IconName } from './Icon.types';
import { ICON } from './Icon.const';

export interface IconProps {
  slot?: string;
  name: IconName;
  className?: string;
  size?: ComponentProps<typeof IonIcon>['size'];
  color?: Color;
  fontSize?: CSSProperties['fontSize'];
}

export const Icon: FC<IconProps> = forwardRef<any, IconProps>(function Icon(
  { size, name, slot, className, color, fontSize },
  ref
) {
  const colorStyles: CSSProperties = color
    ? { color: `var(--ion-color-${color})` }
    : {};

  return (
    <IonIcon
      className={className}
      icon={ICON[name]}
      ref={ref}
      size={size}
      slot={slot}
      style={{ ...colorStyles, fontSize }}
    />
  );
});
