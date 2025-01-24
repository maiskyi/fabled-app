import { PropsWithChildren, ReactElement } from 'react';
import { noop } from 'lodash';
import classNames from 'classnames';

import { IonCard } from '@ionic/react';

import { CardHeader } from './CardHeader/CardHeader';
import { CardSubtitle } from './CardSubtitle/CardSubtitle';
import { CardThumb } from './CardThumb/CardThumb';
import { CardTitle } from './CardTitle/CardTitle';
import { CardAvatar } from './CardAvatar/CardAvatar';
import { CardContent } from './CardContent/CardContent';
import { CardFooter } from './CardFooter/CardFooter';
import { CardBadge } from './CardBadge/CardBadge';
import { CardContext } from './Card.context';
import { CardColor } from './Card.types';

import styles from './Card.module.scss';

export type CardProps = PropsWithChildren<{
  loading?: boolean;
  onClick?: () => void;
  color?: CardColor;
  className?: string;
  outline?: boolean;
}>;

interface CardComponent {
  (props: CardProps): ReactElement;
  Header: typeof CardHeader;
  Subtitle: typeof CardSubtitle;
  Thumb: typeof CardThumb;
  Title: typeof CardTitle;
  Avatar: typeof CardAvatar;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
  Badge: typeof CardBadge;
}

export const Card: CardComponent = ({
  children,
  loading,
  color,
  onClick = noop,
  className,
  outline,
}: CardProps) => {
  const handleOnClick = () => {
    if (!loading) onClick();
  };

  return (
    <CardContext.Provider value={{ loading }}>
      <IonCard
        className={classNames(
          styles.root,
          {
            [styles.outline]: outline,
            [styles.bgHorizontal]: color === 'horizontal',
          },
          className
        )}
        color={color}
        onClick={handleOnClick}
      >
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
Card.Footer = CardFooter;
Card.Badge = CardBadge;
