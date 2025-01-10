import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { SwiperSlide } from 'swiper/react';

import styles from '../Onboarding.module.scss';

type OnboardingItemProps = PropsWithChildren<{
  className?: string;
}>;

export const OnboardingItem: FC<OnboardingItemProps> = ({
  children,
  className,
}) => {
  return (
    <SwiperSlide className={classNames(styles.slide, className)}>
      {children}
    </SwiperSlide>
  );
};

OnboardingItem.displayName = 'SwiperSlide';
