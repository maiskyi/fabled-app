import { FC, PropsWithChildren } from 'react';

import { IonCardHeader } from '@ionic/react';

type CardHeaderProps = PropsWithChildren<{}>;

export const CardHeader: FC<CardHeaderProps> = ({ children }) => {
  return <IonCardHeader>{children}</IonCardHeader>;
};
