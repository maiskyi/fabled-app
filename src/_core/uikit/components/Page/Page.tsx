import { FC, PropsWithChildren } from 'react';

import { IonPage } from '@ionic/react';

import { PageContext } from '../../contexts/PageContext';

export type PageProps = PropsWithChildren<{
  cover?: string;
}>;

export const Page: FC<PageProps> = ({ children, cover }) => {
  return (
    <IonPage style={{ backgroundImage: cover && `url(${cover})` }}>
      <PageContext.Provider value={{ withCover: !!cover }}>
        {children}
      </PageContext.Provider>
    </IonPage>
  );
};
