import { PropsWithChildren, ReactElement } from 'react';

import { Swiper as ReactSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { SwiperSlide } from './SwiperSlide/SwiperSlide';
import { SwiperPaginationProps } from './Swiper.types';

export type SwiperProps = PropsWithChildren<{
  gap?: number;
  initialSlide?: number;
  pagination?: SwiperPaginationProps;
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
}: SwiperProps) => {
  return (
    <ReactSwiper
      centeredSlides
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
