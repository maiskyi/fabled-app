import { PropsWithChildren, ReactElement } from 'react';

import { IonCard } from '@ionic/react';

import { CardHeader } from './CardHeader/CardHeader';
import { CardSubtitle } from './CardSubtitle/CardSubtitle';
import { CardThumb } from './CardThumb/CardThumb';
import { CardTitle } from './CardTitle/CardTitle';

export type CardProps = PropsWithChildren<{}>;

interface CardComponent {
  (props: CardProps): ReactElement;
  Header: typeof CardHeader;
  Subtitle: typeof CardSubtitle;
  Thumb: typeof CardThumb;
  Title: typeof CardTitle;
}

export const Card: CardComponent = ({ children }: CardProps) => {
  return <IonCard>{children}</IonCard>;
};

Card.Header = CardHeader;
Card.Subtitle = CardSubtitle;
Card.Thumb = CardThumb;
Card.Title = CardTitle;