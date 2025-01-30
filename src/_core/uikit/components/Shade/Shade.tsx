import { CSSProperties, FC } from 'react';
import classNames from 'classnames';

import { ShadeBackground } from './Shade.types';

import styles from './Shade.module.scss';

export interface ShadeProps {
  background?: ShadeBackground;
  top?: CSSProperties['top'];
}

export const Shade: FC<ShadeProps> = ({
  background = 'lavender-indigo',
  top,
}) => {
  return (
    <div
      className={classNames(styles.root, styles[background])}
      style={{ top }}
    />
  );
};
