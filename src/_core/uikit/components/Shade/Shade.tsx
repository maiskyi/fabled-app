import { FC } from 'react';
import classNames from 'classnames';

import { ShadeBackground } from './Shade.types';

import styles from './Shade.module.scss';

export interface ShadeProps {
  background?: ShadeBackground;
}

export const Shade: FC<ShadeProps> = ({ background }) => {
  return <div className={classNames(styles.root, styles[background])} />;
};
