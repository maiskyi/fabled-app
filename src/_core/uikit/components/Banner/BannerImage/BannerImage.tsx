import { FC } from 'react';

import { Shade, ShadeBackground } from '../../Shade';

import { BannerImageAsset } from './BannerImage.types';
import { ASSETS_MAPPING } from './BannerImage.const';

import styles from '../Banner.module.scss';

interface BannerImageProps {
  asset: BannerImageAsset;
  background?: ShadeBackground;
}

export const BannerImage: FC<BannerImageProps> = ({
  asset,
  background = 'ultramarine-blue',
}) => {
  return (
    <div className={styles.picture}>
      <Shade background={background} />
      <div className={styles.image}>
        <img alt="" src={ASSETS_MAPPING[asset]} />
      </div>
    </div>
  );
};
