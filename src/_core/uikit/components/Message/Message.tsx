import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonCard, IonCardContent, IonAvatar } from '@ionic/react';
import { Color } from '@ionic/core';

import { Typography } from '../Typography';

import { MessageOrigin } from './Message.types';

import styles from './Message.module.scss';

export type MessageProps = PropsWithChildren<{
  origin: MessageOrigin;
  avatar?: string;
  color?: Color;
}>;

export const Message: FC<MessageProps> = ({
  origin,
  children,
  avatar,
  color: initialColor,
}) => {
  const color: Color = (() => {
    if (initialColor) return initialColor;
    return origin === 'companion' ? 'primary' : 'secondary';
  })();

  return (
    <div className={classNames(styles.root, styles[origin])}>
      <IonAvatar className={styles.avatar}>
        <img alt="" src={avatar} />
      </IonAvatar>
      <div className={styles.message}>
        <div
          className={classNames(
            styles.arrow,
            styles[origin],
            `ion-color-${color}`
          )}
        />
        <IonCard
          className={classNames(styles.card, styles[origin])}
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
