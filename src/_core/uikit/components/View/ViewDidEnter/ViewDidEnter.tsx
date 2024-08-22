import { FC, PropsWithChildren, useState } from 'react';

import { useIonViewDidEnter } from '@ionic/react';

type ViewDidEnterProps = PropsWithChildren<{}>;

export const ViewDidEnter: FC<ViewDidEnterProps> = ({ children }) => {
  const [ready, setReady] = useState(false);

  useIonViewDidEnter(() => setReady(() => true));

  return <>{ready ? children : null}</>;
};
