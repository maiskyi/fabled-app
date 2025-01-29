import { PropsWithChildren, ReactElement, useRef, useState } from 'react';
import classNames from 'classnames';
import { useAsyncFn } from 'react-use';

import { Swiper, SwiperClass, SwiperRef } from 'swiper/react';

import { Button } from '../Button';

import { defaultOnSkip, defaultOnCompleted } from './Onboarding.utils';
import { OnboardingItem } from './OnboardingItem/OnboardingItem';

import styles from './Onboarding.module.scss';

export type OnboardingProps = PropsWithChildren<{
  className?: string;
  onSkip?: () => Promise<unknown>;
  onCompleted?: () => Promise<unknown>;
  gap?: number;
}>;

interface OnboardingComponent {
  (props: OnboardingProps): ReactElement;
  Item: typeof OnboardingItem;
}

export const Onboarding: OnboardingComponent = ({
  gap,
  children,
  className,
  onSkip = defaultOnSkip,
  onCompleted = defaultOnCompleted,
}: OnboardingProps) => {
  const swiper = useRef<SwiperRef>();

  const [{ isEnd }, setState] = useState({
    isEnd: false,
  });

  const [{ loading: isSkipping }, handleOnSkip] = useAsyncFn(async () => {
    await onSkip();
    return true;
  });

  const [{ loading: isCompleting }, handleOnComplete] = useAsyncFn(async () => {
    await onCompleted();
    return true;
  });

  const handleOnNext = () => {
    if (isEnd) handleOnComplete();
    else swiper.current.swiper.slideNext();
  };

  const handleOnSlideChange = (swiper: SwiperClass) => {
    setState((prev) => ({
      ...prev,
      isEnd: swiper.isEnd,
    }));
  };

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.slides}>
        <Swiper
          centeredSlides
          className={styles.root}
          onSlideChange={handleOnSlideChange}
          ref={swiper}
          slidesPerView={1}
          spaceBetween={gap}
        >
          {children}
        </Swiper>
      </div>
      <div className={styles.nav}>
        <div>
          <Button
            color="dark"
            fill="outline"
            loading={isSkipping}
            onClick={handleOnSkip}
          >
            Skip
          </Button>
        </div>
        <div className={styles.primary}>
          <Button loading={isCompleting} onClick={handleOnNext}>
            {isEnd ? `Let's get started` : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

Onboarding.Item = OnboardingItem;
