import { CSSProperties, FC, PropsWithChildren } from 'react';

import { IonRow } from '@ionic/react';

type GridRowProps = PropsWithChildren<CSSProperties>;

export const GridRow: FC<GridRowProps> = ({ children, ...style }) => {
  return <IonRow style={style}>{children}</IonRow>;
};
