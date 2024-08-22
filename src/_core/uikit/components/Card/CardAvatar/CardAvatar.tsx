import { FC } from 'react';
import classNames from 'classnames';

import { IonAvatar } from '@ionic/react';

import DEFAULT_AVATAR_SRC from './CardAvatar.svg';

import styles from '../Card.module.scss';

interface CardAvatarProps {
  src?: string;
}

export const CardAvatar: FC<CardAvatarProps> = ({ src }) => {
  return (
    <IonAvatar className={classNames(styles.avatar)}>
      <img alt="" src={src || DEFAULT_AVATAR_SRC} />
    </IonAvatar>
  );
};
