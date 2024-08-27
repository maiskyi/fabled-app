import { PropsWithChildren, ReactElement } from 'react';
import { noop } from 'lodash';

import { IonCard } from '@ionic/react';
import { Color } from '@ionic/core';

import { CardHeader } from './CardHeader/CardHeader';
import { CardSubtitle } from './CardSubtitle/CardSubtitle';
import { CardThumb } from './CardThumb/CardThumb';
import { CardTitle } from './CardTitle/CardTitle';
import { CardAvatar } from './CardAvatar/CardAvatar';
import { CardContent } from './CardContent/CardContent';
import { CardContext } from './Card.context';

export type CardProps = PropsWithChildren<{
  loading?: boolean;
  onClick?: () => void;
  color?: Color;
  className?: string;
}>;

interface CardComponent {
  (props: CardProps): ReactElement;
  Header: typeof CardHeader;
  Subtitle: typeof CardSubtitle;
  Thumb: typeof CardThumb;
  Title: typeof CardTitle;
  Avatar: typeof CardAvatar;
  Content: typeof CardContent;
}

export const Card: CardComponent = ({
  children,
  loading,
  color,
  onClick = noop,
  className,
}: CardProps) => {
  const handleOnClick = () => {
    if (!loading) onClick();
  };

  return (
    <CardContext.Provider value={{ loading }}>
      <IonCard className={className} color={color} onClick={handleOnClick}>
        {children}
      </IonCard>
    </CardContext.Provider>
  );
};

Card.Header = CardHeader;
Card.Subtitle = CardSubtitle;
Card.Thumb = CardThumb;
Card.Title = CardTitle;
Card.Avatar = CardAvatar;
Card.Content = CardContent;
