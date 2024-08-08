import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonCardHeader } from '@ionic/react';

import styles from '../Card.module.scss';

type CardHeaderProps = PropsWithChildren<{}>;

export const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return (
    <IonCardHeader className={classNames(styles.header)}>
      {children}
    </IonCardHeader>
  );
};
