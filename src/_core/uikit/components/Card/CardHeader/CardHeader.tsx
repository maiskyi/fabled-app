import { FC, PropsWithChildren } from 'react';

import { IonCardHeader } from '@ionic/react';
import classNames from 'classnames';

import styles from '../Card.module.scss';

type CardHeaderProps = PropsWithChildren<{}>;

export const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return (
    <IonCardHeader className={classNames(styles.header)}>
      {children}
    </IonCardHeader>
  );
};
