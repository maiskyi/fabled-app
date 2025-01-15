import { Fragment, PropsWithChildren, ReactElement } from 'react';

import { AttributeListItem } from './AttributeListItem/AttributeListItem';

import styles from './AttributeList.module.scss';

export type AttributeListProps = PropsWithChildren<{}>;

interface AttributeListComponent {
  (props: AttributeListProps): ReactElement;
  Item: typeof AttributeListItem;
}

export const AttributeList: AttributeListComponent = ({
  children,
}: AttributeListProps) => {
  return (
    <Fragment>
      <ul className={styles.root}>{children}</ul>
    </Fragment>
  );
};

AttributeList.Item = AttributeListItem;
