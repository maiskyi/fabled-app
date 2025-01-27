import { FC } from 'react';

import styles from '../Banner.module.scss';

export const BannerIcon: FC = () => {
  return (
    <div className={styles.picture}>
      <div className={styles.shade}></div>
      <div className={styles.image}>
        {/* <img alt="" src={ASSETS_MAPPING[asset]} /> */}
      </div>
    </div>
  );
};
