import { FC } from 'react';
import classNames from 'classnames';

import { IonAvatar, IonIcon } from '@ionic/react';

import { ICON, IconName } from '../Icon';

import styles from './Avatar.module.scss';

export interface AvatarProps {
  src?: string;
  icon?: IconName;
  className?: string;
  border?: boolean;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({
  src,
  icon,
  className,
  border,
  size,
}) => {
  return (
    <IonAvatar
      className={classNames(
        styles.root,
        {
          [styles.border]: border,
          [styles.withIcon]: !!icon,
        },
        className
      )}
      style={{ height: size, width: size }}
    >
      {!!src && <img alt="" src={src} />}
      {!!icon && <IonIcon icon={ICON[icon]} style={{ fontSize: 24 }} />}
    </IonAvatar>
  );
};
