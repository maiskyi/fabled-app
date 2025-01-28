import { FC, PropsWithChildren } from 'react';

import { Typography } from '../../Typography';

import styles from '../Banner.module.scss';

type BannerTitleProps = PropsWithChildren<{}>;

export const BannerTitle: FC<BannerTitleProps> = ({ children }) => {
  return (
    <Typography className={styles.title} variant="h4" weight="bold">
      {children}
    </Typography>
  );
};
