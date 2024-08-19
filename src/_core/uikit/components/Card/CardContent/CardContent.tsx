import { FC, PropsWithChildren } from 'react';

import { IonCardContent } from '@ionic/react';

type CardContentProps = PropsWithChildren<{}>;

export const CardContent: FC<CardContentProps> = ({ children }) => {
  return <IonCardContent>{children}</IonCardContent>;
};
