import { FC, PropsWithChildren } from 'react';

import { IonCardTitle } from '@ionic/react';

type CardTitleProps = PropsWithChildren<{}>;

export const CardTitle: FC<CardTitleProps> = ({ children }) => {
  return <IonCardTitle>{children}</IonCardTitle>;
};
