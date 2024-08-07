import { FC } from 'react';

import { IonAvatar } from '@ionic/react';
import classNames from 'classnames';

import styles from '../Card.module.scss';

interface CardAvatarProps {
  src: string;
}

export const CardAvatar: FC<CardAvatarProps> = ({ src }) => {
  return (
    <IonAvatar className={classNames(styles.avatar)}>
      <img alt="" src={src} />
    </IonAvatar>
  );
};
