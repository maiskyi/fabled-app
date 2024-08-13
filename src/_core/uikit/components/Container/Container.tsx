import { CSSProperties, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type ContainerProps = PropsWithChildren<{
  padding?: boolean;
  aspectRatio?: CSSProperties['aspectRatio'];
}>;

export const Container: FC<ContainerProps> = ({
  children,
  aspectRatio,
  padding,
}) => {
  return (
    <div
      style={{ aspectRatio }}
      className={classNames({
        'ion-padding': padding,
      })}
    >
      {children}
    </div>
  );
};
