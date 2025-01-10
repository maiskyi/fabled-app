import { FC, PropsWithChildren } from 'react';

type OnboardingItemProps = PropsWithChildren<{}>;

export const OnboardingItem: FC<OnboardingItemProps> = ({ children }) => {
  return <>{children}</>;
};
