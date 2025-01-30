import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { castArray } from 'lodash';

import { IonBadge } from '@ionic/react';

import { BadgeColor } from './Badge.types';

import styles from './Badge.module.scss';

export type BadgeProps = PropsWithChildren<{
  color?: BadgeColor;
  className?: string;
}>;

export const Badge: FC<BadgeProps> = ({
  children,
  color: initialColor,
  className,
}) => {
  const [color] = castArray(initialColor).filter(
    (v) => v !== 'gradient-mix-horizontal'
  );

  return (
    <IonBadge
      className={classNames(styles.root, styles[initialColor], className)}
      color={color}
    >
      {children}
    </IonBadge>
  );
};
