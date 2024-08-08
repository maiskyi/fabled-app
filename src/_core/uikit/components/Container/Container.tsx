import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type ContainerProps = PropsWithChildren<{
  padding?: boolean;
}>;

export const Container: FC<ContainerProps> = ({ children, padding }) => {
  return (
    <div
      className={classNames({
        'ion-padding': padding,
      })}
    >
      {children}
    </div>
  );
};
