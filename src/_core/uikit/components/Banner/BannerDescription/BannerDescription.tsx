import { FC, PropsWithChildren } from 'react';

import { Typography } from '../../Typography';

import styles from '../Banner.module.scss';

type BannerDescriptionProps = PropsWithChildren<{}>;

export const BannerDescription: FC<BannerDescriptionProps> = ({ children }) => {
  return (
    <Typography className={styles.description} variant="body-2">
      {children}
    </Typography>
  );
};
