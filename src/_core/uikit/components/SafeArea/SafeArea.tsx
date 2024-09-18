import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './SafeArea.module.scss';

export type SafeAreaProps = PropsWithChildren<{
  bottom?: boolean;
}>;

export const SafeArea: FC<SafeAreaProps> = ({ children, bottom }) => {
  return (
    <div
      className={classNames({
        [styles.bottom]: bottom,
      })}
    >
      {children}
    </div>
  );
};
