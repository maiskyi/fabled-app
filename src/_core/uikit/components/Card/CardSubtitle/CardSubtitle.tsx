import { FC, PropsWithChildren } from 'react';

import { IonCardSubtitle } from '@ionic/react';

type CardSubtitleProps = PropsWithChildren<{}>;

export const CardSubtitle: FC<CardSubtitleProps> = ({ children }) => {
  return <IonCardSubtitle>{children}</IonCardSubtitle>;
};
