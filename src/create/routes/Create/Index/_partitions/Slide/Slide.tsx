import { FC } from 'react';

import { Checkbox, Tile } from '@core/uikit';

import styles from './Slide.module.scss';

interface SlideProps {
  onClick: () => void;
  checked: boolean;
  src: string;
  caption: string;
}

export const Slide: FC<SlideProps> = ({ onClick, checked, src, caption }) => {
  return (
    <Tile aspectRatio={1} onClick={onClick} src={src}>
      <Checkbox checked={checked} className={styles.checkbox} />
      <Tile.Header>
        <Tile.Title>{caption}</Tile.Title>
      </Tile.Header>
    </Tile>
  );
};
