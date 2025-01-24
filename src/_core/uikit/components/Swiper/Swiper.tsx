import { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';

import { Swiper as ReactSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { SwiperSlide } from './SwiperSlide/SwiperSlide';
import { SwiperPaginationProps } from './Swiper.types';

import styles from './Swiper.module.scss';

export type SwiperProps = PropsWithChildren<{
  gap?: number;
  centered?: boolean;
  initialSlide?: number;
  pagination?: SwiperPaginationProps;
  className?: string;
}>;

interface SwiperComponent {
  (props: SwiperProps): ReactElement;
  Slide: typeof SwiperSlide;
}

export const Swiper: SwiperComponent = ({
  children,
  gap,
  pagination,
  initialSlide,
  centered,
  className,
}: SwiperProps) => {
  return (
    <ReactSwiper
      centeredSlides={centered}
      className={classNames(styles.root, className)}
      initialSlide={initialSlide}
      modules={[Pagination]}
      pagination={pagination}
      slidesPerView="auto"
      spaceBetween={gap}
    >
      {children}
    </ReactSwiper>
  );
};

Swiper.Slide = SwiperSlide;
