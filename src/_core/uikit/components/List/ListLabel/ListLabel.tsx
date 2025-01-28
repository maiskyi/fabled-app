import { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonLabel } from '@ionic/react';

import typography from '../../Typography/Typography.module.scss';
import styles from '../List.module.scss';

type ListLabelProps = PropsWithChildren<{
  color?: ComponentProps<typeof IonLabel>['color'];
}>;

export const ListLabel: FC<ListLabelProps> = ({ children, color }) => {
  return (
    <IonLabel
      className={classNames(typography['body-2'], styles.label)}
      color={color}
    >
      {children}
    </IonLabel>
  );
};
