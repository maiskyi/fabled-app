import { FC } from 'react';

import styles from './BannerImage.module.scss';

interface BannerImageProps {}

export const BannerImage: FC<BannerImageProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.shade}></div>
      <div className={styles.image}></div>
    </div>
  );
};
