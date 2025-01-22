import { FC } from 'react';

import { BannerImageAsset } from './BannerImage.types';
import { ASSETS_MAPPING } from './BannerImage.const';

import styles from './BannerImage.module.scss';

interface BannerImageProps {
  asset: BannerImageAsset;
}

export const BannerImage: FC<BannerImageProps> = ({ asset }) => {
  return (
    <div className={styles.root}>
      <div className={styles.shade}></div>
      <div className={styles.image}>
        <img alt="" src={ASSETS_MAPPING[asset]} />
      </div>
    </div>
  );
};
