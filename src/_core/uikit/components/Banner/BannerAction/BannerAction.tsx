import { FC, PropsWithChildren } from 'react';

import { Button } from '../../Button';

import styles from '../Banner.module.scss';

type BannerActionProps = PropsWithChildren<{
  onClick?: () => void;
}>;

export const BannerAction: FC<BannerActionProps> = ({ children, onClick }) => {
  return (
    <Button
      className={styles.action}
      color="tertiary"
      onClick={onClick}
      size="small"
    >
      {children}
    </Button>
  );
};
