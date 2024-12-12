import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonPage } from '@ionic/react';

import { PageContext } from '../../contexts/PageContext';

import styles from './Page.module.scss';

export type PageProps = PropsWithChildren<{
  cover?: string;
}>;

export const Page: FC<PageProps> = ({ children, cover }) => {
  return (
    <IonPage
      className={classNames(styles.root, {
        [styles.cover]: !!cover,
      })}
      style={{ backgroundImage: `url(${cover})` }}
    >
      <PageContext.Provider value={{ withCover: !!cover }}>
        {children}
      </PageContext.Provider>
    </IonPage>
  );
};
