import { CSSProperties, PropsWithChildren, ReactElement } from 'react';

import { IonCard } from '@ionic/react';

import { Image } from '../Image';

import { TileHeader } from './TileHeader/TileHeader';
import { TileTitle } from './TileTitle/TileTitle';
import { TileSubtitle } from './TileSubtitle/TileSubtitle';

import styles from './Tile.module.scss';

export type TileProps = PropsWithChildren<{
  src?: string;
  aspectRatio: CSSProperties['aspectRatio'];
  onClick?: () => void;
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
}) => {
  return (
    <IonCard className={styles.root} onClick={onClick}>
      <div style={{ aspectRatio }}>{!!src && <Image src={src} />}</div>
      {children}
    </IonCard>
  );
};

Tile.Header = TileHeader;
Tile.Title = TileTitle;
Tile.Subtitle = TileSubtitle;
