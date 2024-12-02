import { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';

import { IonGrid } from '@ionic/react';

import { GridRow } from './GridRow/GridRow';
import { GridCell } from './GridCell/GridCell';

import styles from './Grid.module.scss';

export type GridProps = PropsWithChildren<{
  fixed?: boolean;
}>;

interface GridComponent {
  (props: GridProps): ReactElement;
  Row: typeof GridRow;
  Cell: typeof GridCell;
}

export const Grid: GridComponent = ({ children, fixed }: GridProps) => {
  return (
    <IonGrid
      className={classNames('ion-no-padding', styles.root)}
      fixed={fixed}
    >
      {children}
    </IonGrid>
  );
};

Grid.Row = GridRow;
Grid.Cell = GridCell;
