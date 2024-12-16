import { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import { IonGrid } from '@ionic/react';

import { DeviceContext } from '../../contexts/DeviceContext';

import { GridRow } from './GridRow/GridRow';
import { GridCell } from './GridCell/GridCell';

import styles from './Grid.module.scss';

export type GridProps = PropsWithChildren<{}>;

interface GridComponent {
  (props: GridProps): ReactElement;
  Row: typeof GridRow;
  Cell: typeof GridCell;
}

export const Grid: GridComponent = ({ children }: GridProps) => {
  const isDesktop = useContextSelector(
    DeviceContext,
    ({ isDesktop }) => isDesktop
  );

  return (
    <IonGrid
      className={classNames('ion-no-padding', styles.root, {
        [styles.full]: !isDesktop,
      })}
      fixed={isDesktop}
    >
      {children}
    </IonGrid>
  );
};

Grid.Row = GridRow;
Grid.Cell = GridCell;
