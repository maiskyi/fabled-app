import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonCol } from '@ionic/react';

type GridCellProps = PropsWithChildren<{
  spacing?: number;
}>;

export const GridCell: FC<GridCellProps> = ({ children, spacing }) => {
  return (
    <IonCol
      className={classNames({
        'ion-no-padding': !spacing,
      })}
    >
      {children}
    </IonCol>
  );
};
