import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonIcon } from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';

import styles from '../AttributeList.module.scss';

type AttributeListItemProps = PropsWithChildren<{
  active?: boolean;
}>;

export const AttributeListItem: FC<AttributeListItemProps> = ({
  children,
  active = true,
}) => {
  return (
    <li
      className={classNames(styles.item, {
        [styles.active]: active,
      })}
    >
      <IonIcon
        className={classNames(styles.icon, {
          [styles.active]: active,
        })}
        icon={checkmarkCircle}
      />
      {children}
    </li>
  );
};
