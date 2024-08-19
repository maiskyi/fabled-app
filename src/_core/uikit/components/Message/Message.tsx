import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
} from '@ionic/react';
import { Color } from '@ionic/core';

import styles from './Message.module.scss';

export type MessageProps = PropsWithChildren<{
  title: string;
  color?: Color;
  arrow?: 'left';
}>;

export const Message: FC<MessageProps> = ({
  title,
  arrow = 'left',
  color,
  children,
}) => {
  return (
    <div className={classNames(styles.root, styles[arrow])}>
      <div
        className={classNames(
          styles.arrow,
          styles[arrow],
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
  );
};
