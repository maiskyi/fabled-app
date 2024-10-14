import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonCardHeader } from '@ionic/react';

import styles from '../Card.module.scss';

type CardHeaderProps = PropsWithChildren<{
  className?: string;
}>;

export const CardHeader: FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <IonCardHeader className={classNames(styles.header, className)}>
      {children}
    </IonCardHeader>
  );
};
