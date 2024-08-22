import classNames from 'classnames';
import { CSSProperties, FC, PropsWithChildren } from 'react';

import { SwiperSlide as ReactSwiperSlide } from 'swiper/react';

type SwiperSlideProps = PropsWithChildren<{
  width?: CSSProperties['width'];
  className?: string;
}>;

export const SwiperSlide: FC<SwiperSlideProps> = ({
  width,
  children,
  className,
}) => {
  return (
    <ReactSwiperSlide className={classNames(className)} style={{ width }}>
      {children}
    </ReactSwiperSlide>
  );
};

SwiperSlide.displayName = 'SwiperSlide';
