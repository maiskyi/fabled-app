import { FC, PropsWithChildren, MouseEventHandler } from 'react';
import { noop } from 'lodash';

export type LinkVoidProps = PropsWithChildren<{
  onClick?: () => void;
}>;

export const LinkVoid: FC<LinkVoidProps> = ({ children, onClick = noop }) => {
  const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a href="/" onClick={handleOnClick}>
      {children}
    </a>
  );
};
