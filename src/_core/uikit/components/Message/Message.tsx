import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonCard, IonCardContent } from '@ionic/react';
import { Color } from '@ionic/core';

import { Typography } from '../Typography';
import { IconName } from '../Icon';
import { Avatar } from '../Avatar';

import { MessageOrigin } from './Message.types';

import styles from './Message.module.scss';

export type MessageProps = PropsWithChildren<{
  origin: MessageOrigin;
  avatar?: string;
  color?: Color;
  icon?: IconName;
}>;

export const Message: FC<MessageProps> = ({
  origin,
  children,
  avatar,
  icon,
  color: initialColor,
}) => {
  const color: Color = (() => {
    if (initialColor) return initialColor;
    return origin === 'companion' ? 'primary' : 'secondary';
  })();

  return (
    <div className={classNames(styles.root, styles[origin])}>
      <Avatar
        border={origin === 'me'}
        className={styles.avatar}
        icon={icon}
        src={avatar}
      />
      <div className={styles.message}>
        <div
          className={classNames(
            styles.arrow,
            styles[origin],
            `ion-color-${color}`
          )}
        />
        <IonCard
          className={classNames(styles.card, styles[origin], {
            [styles.error]: color === 'danger',
          })}
          color={color}
        >
          <IonCardContent className={styles.content}>
            <Typography variant="body-3">{children}</Typography>
          </IonCardContent>
        </IonCard>
      </div>
    </div>
  );
};
