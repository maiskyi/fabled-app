import { FC, PropsWithChildren } from 'react';

import { Typography } from '../../../Typography';

type OnboardingItemTitleProps = PropsWithChildren<{}>;

export const OnboardingItemTitle: FC<OnboardingItemTitleProps> = ({
  children,
}) => {
  return (
    <Typography variant="h1" weight="bold">
      {children}
    </Typography>
  );
};
