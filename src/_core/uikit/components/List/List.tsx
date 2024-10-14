import { PropsWithChildren, ReactElement } from 'react';

import { IonList } from '@ionic/react';

import { ListItem } from './ListItem/ListItem';
import { ListHeader } from './ListHeader/ListHeader';
import { ListLabel } from './ListLabel/ListLabel';
import { ListIcon } from './ListIcon/ListIcon';
import { ListNote } from './ListNote/ListNote';

export type ListProps = PropsWithChildren<{}>;

interface ListComponent {
  (props: ListProps): ReactElement;
  Item: typeof ListItem;
  Header: typeof ListHeader;
  Label: typeof ListLabel;
  Icon: typeof ListIcon;
  Note: typeof ListNote;
}

export const List: ListComponent = ({ children }: ListProps) => {
  return <IonList>{children}</IonList>;
};

List.Item = ListItem;
List.Header = ListHeader;
List.Label = ListLabel;
List.Icon = ListIcon;
List.Note = ListNote;
