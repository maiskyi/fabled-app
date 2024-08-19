import { PropsWithChildren, ReactElement } from 'react';

import { Swiper as ReactSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { SwiperSlide } from './SwiperSlide/SwiperSlide';

export type SwiperProps = PropsWithChildren<{
  gap?: number;
}>;

interface SwiperComponent {
  (props: SwiperProps): ReactElement;
  Slide: typeof SwiperSlide;
}

export const Swiper: SwiperComponent = ({ children, gap }: SwiperProps) => {
  return (
    <ReactSwiper
      centeredSlides
      modules={[Pagination]}
      pagination
      slidesPerView="auto"
      spaceBetween={gap}
    >
      {children}
    </ReactSwiper>
  );
};

Swiper.Slide = SwiperSlide;
