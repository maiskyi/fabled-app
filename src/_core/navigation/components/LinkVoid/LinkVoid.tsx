import { FC, PropsWithChildren, MouseEventHandler } from 'react';
import { noop } from 'lodash';

export type LinkVoidProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

export const LinkVoid: FC<LinkVoidProps> = ({
  children,
  className,
  onClick = noop,
}) => {
  const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a className={className} href="/" onClick={handleOnClick}>
      {children}
    </a>
  );
};
