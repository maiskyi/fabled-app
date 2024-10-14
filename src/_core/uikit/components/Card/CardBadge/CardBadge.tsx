import { FC } from 'react';
import classNames from 'classnames';

import { Badge, BadgeProps } from '../../Badge';

import styles from './CardBadge.module.scss';

export const CardBadge: FC<BadgeProps> = ({ children, color, className }) => {
  return (
    <Badge className={classNames(styles.root, className)} color={color}>
      {children}
    </Badge>
  );
};
