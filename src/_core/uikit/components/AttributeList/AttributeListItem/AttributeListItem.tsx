import { FC, PropsWithChildren } from 'react';

type AttributeListItemProps = PropsWithChildren<{}>;

export const AttributeListItem: FC<AttributeListItemProps> = ({ children }) => {
  return <li>{children}</li>;
};
