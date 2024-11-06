import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonAvatar,
} from '@ionic/react';
import { Color } from '@ionic/core';

import { MessageOrigin } from './Message.types';

import styles from './Message.module.scss';

export type MessageProps = PropsWithChildren<{
  title: string;
  origin: MessageOrigin;
  avatar?: string;
  color?: Color;
}>;

export const Message: FC<MessageProps> = ({
  title,
  origin,
  children,
  avatar,
  color: initialColor,
}) => {
  const color: Color = (() => {
    if (initialColor) return initialColor;
    return origin === 'companion' ? 'tertiary' : 'dark';
  })();

  return (
    <div className={classNames(styles.root, styles[origin])}>
      <IonAvatar className={styles.avatar}>
        <img alt={title} src={avatar} />
      </IonAvatar>
      <div className={styles.message}>
        <div
          className={classNames(
            styles.arrow,
            styles[origin],
            `ion-color-${color}`
          )}
        />
        <IonCard color={color}>
          <IonCardHeader>
            <IonCardSubtitle>{title}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>{children}</IonCardContent>
        </IonCard>
      </div>
    </div>
  );
};
