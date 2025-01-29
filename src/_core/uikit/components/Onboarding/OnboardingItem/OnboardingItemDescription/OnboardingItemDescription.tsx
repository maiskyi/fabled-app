import { FC, PropsWithChildren } from 'react';

import { Typography } from '../../../Typography';

type OnboardingItemDescriptionProps = PropsWithChildren<{}>;

export const OnboardingItemDescription: FC<OnboardingItemDescriptionProps> = ({
  children,
}) => {
  return <Typography variant="body-2">{children}</Typography>;
};
