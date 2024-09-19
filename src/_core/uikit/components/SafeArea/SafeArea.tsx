import { FC, forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './SafeArea.module.scss';

export type SafeAreaProps = PropsWithChildren<{
  bottom?: boolean;
}>;

export const SafeArea: FC<SafeAreaProps> = forwardRef<
  HTMLDivElement,
  SafeAreaProps
>(function SafeArea({ bottom, children }, ref) {
  return (
    <div
      className={classNames({
        [styles.bottom]: bottom,
      })}
      ref={ref}
    >
      {children}
    </div>
  );
});
