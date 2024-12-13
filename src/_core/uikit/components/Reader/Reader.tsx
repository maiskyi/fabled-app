import { FC, useRef, useState } from 'react';
import classNames from 'classnames';

import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IonFabButton, IonIcon, IonText } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

import { groupParagraphs } from './Reader.utils';

import styles from './Reader.module.scss';

export interface ReaderProps {
  children?: string;
}

export const Reader: FC<ReaderProps> = ({ children = '' }) => {
  const swiper = useRef<SwiperRef>();

  const [{ isBeginning, isEnd }, setState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  const paragraphs = children
    .split('\n')
    .map((v) => v.trim())
    .filter((v) => !!v);

  const groups = groupParagraphs(paragraphs, 400);

  const handleOnInit = (swiper: SwiperClass) => {
    setState((prev) => ({
      ...prev,
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    }));
  };

  const handleOnSlideChange = (swiper: SwiperClass) => {
    setState((prev) => ({
      ...prev,
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    }));
  };

  const handleOnNext = () => {
    swiper.current.swiper.slideNext();
  };

  const handleOnPrev = () => {
    swiper.current.swiper.slidePrev();
  };

  return (
    <div className={styles.root}>
      <Swiper
        effect="fade"
        loop={false}
        modules={[Navigation, Pagination]}
        onInit={handleOnInit}
        onSlideChange={handleOnSlideChange}
        pagination={{
          el: `.${styles.swiperPagination}`,
        }}
        ref={swiper}
      >
        {groups.map((items, index) => {
          return (
            <SwiperSlide className={styles.slide} key={index}>
              {items.map((text) => {
                return (
                  <IonText className={styles.text} key={text}>
                    {text}
                  </IonText>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.bottom}>
        <div className={styles.pagination}>
          <div className={styles.swiperPagination} />
        </div>
        <div className={styles.navigation}>
          <IonFabButton
            className={classNames(styles.prev)}
            color="tertiary"
            disabled={isBeginning}
            onClick={handleOnPrev}
          >
            <IonIcon icon={chevronBackOutline} />
          </IonFabButton>
          <IonFabButton
            color="tertiary"
            disabled={isEnd}
            onClick={handleOnNext}
          >
            <IonIcon icon={chevronForwardOutline} />
          </IonFabButton>
        </div>
      </div>
    </div>
  );
};
