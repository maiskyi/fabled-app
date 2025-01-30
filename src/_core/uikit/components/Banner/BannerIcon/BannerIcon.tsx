import { FC } from 'react';
import classNames from 'classnames';

import { Color } from '@ionic/core';

import { IconName } from '../../Icon';
import { ASSETS } from '../../../constants';

import styles from '../Banner.module.scss';

interface BannerIconProps {
  icon?: IconName;
  color?: Color;
}

export const BannerIcon: FC<BannerIconProps> = () => {
  return (
    <div className={styles.picture}>
      <div className={styles.shade}></div>
      <div className={classNames(styles.image, styles.withIcon)}>
        <img alt="" src={ASSETS.LOGO} />
      </div>
    </div>
  );
};
