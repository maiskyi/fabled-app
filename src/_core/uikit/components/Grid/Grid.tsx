import { PropsWithChildren, ReactElement } from 'react';

import { IonGrid } from '@ionic/react';

import { GridRow } from './GridRow/GridRow';
import { GridCell } from './GridCell/GridCell';

export type GridProps = PropsWithChildren<{
  fixed?: boolean;
}>;

interface GridComponent {
  (props: GridProps): ReactElement;
  Row: typeof GridRow;
  Cell: typeof GridCell;
}

export const Grid: GridComponent = ({ children, fixed }: GridProps) => {
  return <IonGrid fixed={fixed}>{children}</IonGrid>;
};

Grid.Row = GridRow;
Grid.Cell = GridCell;
