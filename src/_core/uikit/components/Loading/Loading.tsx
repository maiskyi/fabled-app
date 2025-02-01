import { FC } from 'react';

import { IonLoading } from '@ionic/react';

import styles from './Loading.module.scss';

export interface LoadingProps {
  isOpen: boolean;
  message?: string;
}

export const Loading: FC<LoadingProps> = ({ isOpen, message }) => {
  return (
    <IonLoading
      className={styles.root}
      isOpen={isOpen}
      message={message}
      spinner="crescent"
      translucent
    />
  );
};
