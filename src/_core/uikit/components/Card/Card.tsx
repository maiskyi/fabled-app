import { PropsWithChildren, ReactElement } from 'react';
import { noop } from 'lodash';

import { IonCard } from '@ionic/react';

import { CardHeader } from './CardHeader/CardHeader';
import { CardSubtitle } from './CardSubtitle/CardSubtitle';
import { CardThumb } from './CardThumb/CardThumb';
import { CardTitle } from './CardTitle/CardTitle';
import { CardAvatar } from './CardAvatar/CardAvatar';
import { CardContext } from './Card.context';

export type CardProps = PropsWithChildren<{
  loading?: boolean;
  onClick?: () => void;
}>;

interface CardComponent {
  (props: CardProps): ReactElement;
  Header: typeof CardHeader;
  Subtitle: typeof CardSubtitle;
  Thumb: typeof CardThumb;
  Title: typeof CardTitle;
  Avatar: typeof CardAvatar;
}

export const Card: CardComponent = ({
  children,
  loading,
  onClick = noop,
}: CardProps) => {
  const handleOnClick = () => {
    if (!loading) onClick();
  };

  return (
    <CardContext.Provider value={{ loading }}>
      <IonCard onClick={handleOnClick}>{children}</IonCard>
    </CardContext.Provider>
  );
};

Card.Header = CardHeader;
Card.Subtitle = CardSubtitle;
Card.Thumb = CardThumb;
Card.Title = CardTitle;
Card.Avatar = CardAvatar;
