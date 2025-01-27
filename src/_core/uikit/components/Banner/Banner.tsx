import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '../Box';
import { Typography } from '../Typography';

import { BannerSvg } from './BannerSvg/BannerSvg';
import { BannerImage } from './BannerImage/BannerImage';
import { BannerIcon } from './BannerIcon/BannerIcon';

import styles from './Banner.module.scss';

export type BannerProps = PropsWithChildren<{
  title?: string;
  description?: string;
}>;

interface BannerComponent {
  (props: BannerProps): ReactElement;
  Svg: typeof BannerSvg;
  Image: typeof BannerImage;
  Icon: typeof BannerIcon;
}

export const Banner: BannerComponent = ({
  children,
  title,
  description,
}: BannerProps) => {
  const showText = !!title || !!description;

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap={72}
      paddingInline={20}
    >
      {children}
      {showText && (
        <Box display="flex" flexDirection="column" gap={12}>
          {!!title && (
            <Box>
              <Typography className={styles.title} variant="h4" weight="bold">
                {title}
              </Typography>
            </Box>
          )}
          {!!description && (
            <Box>
              <Typography className={styles.description} variant="body-2">
                {description}
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

Banner.Svg = BannerSvg;
Banner.Image = BannerImage;
Banner.Icon = BannerIcon;
