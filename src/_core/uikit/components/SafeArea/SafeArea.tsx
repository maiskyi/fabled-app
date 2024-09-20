import {
  CSSProperties,
  FC,
  forwardRef,
  PropsWithChildren,
  RefAttributes,
} from 'react';
import classNames from 'classnames';

import { SafeAreaSafe } from './SafeArea.types';

import styles from './SafeArea.module.scss';

interface SafeAreaPropsWithoutChildren extends CSSProperties {
  safe: SafeAreaSafe[];
}

export type SafeAreaProps = PropsWithChildren<SafeAreaPropsWithoutChildren> &
  RefAttributes<HTMLDivElement>;

export const SafeArea: FC<SafeAreaProps> = forwardRef<
  HTMLDivElement,
  SafeAreaProps
>(function SafeArea({ safe, children, ...style }, ref) {
  return (
    <div
      className={classNames({
        [styles.bottom]: safe.includes('bottom'),
      })}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  );
});
