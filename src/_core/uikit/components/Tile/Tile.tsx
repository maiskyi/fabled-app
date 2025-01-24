import { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';

import { IonCard } from '@ionic/react';
import { Color } from '@ionic/core';

import { Image } from '../Image';

import { TileHeader } from './TileHeader/TileHeader';
import { TileTitle } from './TileTitle/TileTitle';
import { TileSubtitle } from './TileSubtitle/TileSubtitle';
import { OUTLINE_COLOR_MAPPING } from './Tile.const';

import styles from './Tile.module.scss';

export type TileProps = PropsWithChildren<{
  src?: string;
  aspectRatio: CSSProperties['aspectRatio'];
  onClick?: () => void;
  className?: string;
  outline?: Color;
}>;

interface TileComponent {
  (props: TileProps): ReactElement;
  Header: typeof TileHeader;
  Title: typeof TileTitle;
  Subtitle: typeof TileSubtitle;
}

export const Tile: TileComponent = ({
  children,
  src,
  aspectRatio,
  onClick,
  className,
  outline,
}) => {
  return (
    <IonCard
      className={classNames(
        styles.root,
        {
          [styles.outline]: !!outline,
        },
        className
      )}
      onClick={onClick}
      style={{ '--outline-color': OUTLINE_COLOR_MAPPING[outline] }}
    >
      <div style={{ aspectRatio }}>{!!src && <Image src={src} />}</div>
      {children}
    </IonCard>
  );
};

Tile.Header = TileHeader;
Tile.Title = TileTitle;
Tile.Subtitle = TileSubtitle;
