import { FC, PropsWithChildren } from 'react';

import { Button } from '../../Button';

import styles from '../Banner.module.scss';

type BannerActionProps = PropsWithChildren<{
  onClick?: () => void;
  loading?: boolean;
}>;

export const BannerAction: FC<BannerActionProps> = ({
  children,
  onClick,
  loading,
}) => {
  return (
    <Button
      className={styles.action}
      color="light"
      loading={loading}
      onClick={onClick}
      size="small"
    >
      {children}
    </Button>
  );
};
