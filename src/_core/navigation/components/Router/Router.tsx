import { FC, PropsWithChildren } from 'react';

import { IonReactRouter } from '@ionic/react-router';

import { HISTORY } from '../../constants';

export type RouterProps = PropsWithChildren<{}>;

export const Router: FC<RouterProps> = ({ children }) => {
  return <IonReactRouter history={HISTORY}>{children}</IonReactRouter>;
};
