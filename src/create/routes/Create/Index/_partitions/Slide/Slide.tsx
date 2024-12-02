import { FC } from 'react';

import { Box, Card, Checkbox, Image } from '@core/uikit';

import styles from './Slide.module.scss';

interface SlideProps {
  onClick: () => void;
  checked: boolean;
  src: string;
  caption: string;
}

export const Slide: FC<SlideProps> = ({ onClick, checked, src, caption }) => {
  return (
    <Card onClick={onClick}>
      <Card.Thumb aspectRatio={1}>
        <Checkbox checked={checked} className={styles.checkbox} />
        <Image src={src} />
        <Box
          bottom={12}
          display="flex"
          left={12}
          position="absolute"
          right={12}
        >
          <Card.Title className={styles.title}>{caption}</Card.Title>
        </Box>
      </Card.Thumb>
    </Card>
  );
};
