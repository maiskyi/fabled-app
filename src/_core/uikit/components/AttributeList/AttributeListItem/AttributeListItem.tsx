import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonIcon } from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';

import { Typography, TypographyProps } from '../../Typography';

import styles from '../AttributeList.module.scss';

type AttributeListItemProps = PropsWithChildren<
  {
    active?: boolean;
  } & TypographyProps
>;

export const AttributeListItem: FC<AttributeListItemProps> = ({
  children,
  active = true,
  ...props
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
      <Typography {...props}>{children}</Typography>
    </li>
  );
};
