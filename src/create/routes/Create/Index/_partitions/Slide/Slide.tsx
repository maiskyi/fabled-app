import { FC } from 'react';

import { Tile } from '@core/uikit';

import styles from '../_partitions.module.scss';

interface SlideProps {
  onClick: () => void;
  checked: boolean;
  src: string;
  caption: string;
}

export const Slide: FC<SlideProps> = ({ onClick, checked, src, caption }) => {
  return (
    <Tile
      aspectRatio={1}
      className={styles.tile}
      onClick={onClick}
      outline={checked ? 'secondary' : undefined}
      src={src}
    >
      <Tile.Header>
        <Tile.Title>{caption}</Tile.Title>
      </Tile.Header>
    </Tile>
  );
};
