import { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';

import { SwiperSlide } from 'swiper/react';

import { OnboardingItemDescription } from './OnboardingItemDescription/OnboardingItemDescription';
import { OnboardingItemTitle } from './OnboardingItemTitle/OnboardingItemTitle';
import { OnboardingItemSvg } from './OnboardingItemSvg/OnboardingItemSvg';

import styles from '../Onboarding.module.scss';

type OnboardingItemProps = PropsWithChildren<{
  className?: string;
}>;

interface OnboardingItemDescriptionComponent {
  (props: OnboardingItemProps): ReactElement;
  displayName: string;
  Title: typeof OnboardingItemTitle;
  Description: typeof OnboardingItemDescription;
  Svg: typeof OnboardingItemSvg;
}

export const OnboardingItem: OnboardingItemDescriptionComponent = ({
  children,
  className,
}: OnboardingItemProps) => {
  return (
    <SwiperSlide className={classNames(styles.slide, className)}>
      {children}
    </SwiperSlide>
  );
};

OnboardingItem.displayName = 'SwiperSlide';
OnboardingItem.Title = OnboardingItemTitle;
OnboardingItem.Svg = OnboardingItemSvg;
OnboardingItem.Description = OnboardingItemDescription;
