import { PropsWithChildren, ReactElement } from 'react';

import { AttributeListItem } from './AttributeListItem/AttributeListItem';

export type AttributeListProps = PropsWithChildren<{}>;

interface AttributeListComponent {
  (props: AttributeListProps): ReactElement;
  Item: typeof AttributeListItem;
}

export const AttributeList: AttributeListComponent = ({
  children,
}: AttributeListProps) => {
  return <ul>{children}</ul>;
};

AttributeList.Item = AttributeListItem;
