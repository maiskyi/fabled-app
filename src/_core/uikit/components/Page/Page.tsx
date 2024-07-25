import { FC, PropsWithChildren } from 'react';

import { IonPage } from '@ionic/react';

export type PageProps = PropsWithChildren<{}>;

export const Page: FC<PageProps> = ({ children }) => {
  return <IonPage>{children}</IonPage>;
};
