import { FC, PropsWithChildren } from 'react';

import { IonNote } from '@ionic/react';

type ListNoteProps = PropsWithChildren<{}>;

export const ListNote: FC<ListNoteProps> = ({ children }) => {
  return <IonNote>{children}</IonNote>;
};
