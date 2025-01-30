import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '../Box';

import { BannerImage } from './BannerImage/BannerImage';
import { BannerIcon } from './BannerIcon/BannerIcon';
import { BannerTitle } from './BannerTitle/BannerTitle';
import { BannerDescription } from './BannerDescription/BannerDescription';
import { BannerAction } from './BannerAction/BannerAction';

export type BannerProps = PropsWithChildren<{}>;

interface BannerComponent {
  (props: BannerProps): ReactElement;

  Image: typeof BannerImage;
  Icon: typeof BannerIcon;
  Title: typeof BannerTitle;
  Description: typeof BannerDescription;
  Action: typeof BannerAction;
}

export const Banner: BannerComponent = ({ children }: BannerProps) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      paddingInline={20}
    >
      {children}
    </Box>
  );
};

Banner.Action = BannerAction;
Banner.Description = BannerDescription;
Banner.Icon = BannerIcon;
Banner.Image = BannerImage;
Banner.Title = BannerTitle;
