import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonCol } from '@ionic/react';

import { GridCellSize } from './GridCell.types';

type GridCellProps = PropsWithChildren<{
  spacing?: number;
  lg?: GridCellSize;
  md?: GridCellSize;
  sm?: GridCellSize;
  xs?: GridCellSize;
  xl?: GridCellSize;
}>;

export const GridCell: FC<GridCellProps> = ({
  children,
  spacing,
  lg,
  md,
  sm,
  xl,
  xs,
}) => {
  return (
    <IonCol
      className={classNames({
        'ion-no-padding': !spacing,
      })}
      sizeLg={lg}
      sizeMd={md}
      sizeSm={sm}
      sizeXl={xl}
      sizeXs={xs}
    >
      {children}
    </IonCol>
  );
};
