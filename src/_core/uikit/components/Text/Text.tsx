import { FC, PropsWithChildren } from 'react';

import { IonText } from '@ionic/react';

export type TextProps = PropsWithChildren<{}>;

export const Text: FC<TextProps> = ({ children }) => {
  return <IonText>{children}</IonText>;
};
