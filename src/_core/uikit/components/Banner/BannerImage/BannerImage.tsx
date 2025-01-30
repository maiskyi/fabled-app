import { FC } from 'react';
import classNames from 'classnames';

import { BannerImageAsset, BannerImageBackground } from './BannerImage.types';
import { ASSETS_MAPPING } from './BannerImage.const';

import styles from '../Banner.module.scss';

interface BannerImageProps {
  asset: BannerImageAsset;
  background?: BannerImageBackground;
}

export const BannerImage: FC<BannerImageProps> = ({
  asset,
  background = 'ultramarine-blue',
}) => {
  return (
    <div className={styles.picture}>
      <div className={classNames(styles.shade, styles[background])}></div>
      <div className={styles.image}>
        <img alt="" src={ASSETS_MAPPING[asset]} />
      </div>
    </div>
  );
};
