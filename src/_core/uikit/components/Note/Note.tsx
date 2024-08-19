import { FC, Fragment, PropsWithChildren, useLayoutEffect } from 'react';

import { IonContent, IonPopover } from '@ionic/react';

export type NoteProps = PropsWithChildren<{}>;

export const Note: FC<NoteProps> = ({ children }) => {
  useLayoutEffect(() => {}, []);

  return (
    <Fragment>
      <span id="trigger" />
      <IonPopover isOpen trigger="trigger">
        <IonContent>{children}</IonContent>
      </IonPopover>
    </Fragment>
  );
};
