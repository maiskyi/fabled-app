import { FC } from 'react';

import { IonButtons, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import { Color } from '@ionic/core';

import { ICON } from '../../Icon';

import styles from './HeaderBack.module.scss';

interface HeaderBackProps {
  pathname?: string;
  color?: Color;
}

export const HeaderBack: FC<HeaderBackProps> = ({
  pathname,
  color = 'dark',
}) => {
  const router = useIonRouter();

  const handleOnClick = () => {
    if (router.canGoBack()) {
      return router.goBack();
    }
    if (!router.canGoBack() && pathname) {
      return router.push(pathname, 'back', 'replace');
    }
  };

  return (
    <IonButtons slot="start">
      <IonButton
        className={styles.button}
        color={color}
        mode="md"
        onClick={handleOnClick}
      >
        <IonIcon icon={ICON['arrow-left']} slot="icon-only" />
      </IonButton>
    </IonButtons>
  );
};
