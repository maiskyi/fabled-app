import { FC, useRef, useState } from 'react';
import classNames from 'classnames';
import { noop } from 'lodash';

import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IonFabButton, IonIcon, IonText } from '@ionic/react';
import {
  chevronBackSharp,
  chevronForwardSharp,
  checkmarkSharp,
} from 'ionicons/icons';

import { groupParagraphs } from './Reader.utils';

import styles from './Reader.module.scss';

export interface ReaderProps {
  children?: string;
  onCompleted?: () => Promise<void>;
}

export const Reader: FC<ReaderProps> = ({
  children = '',
  onCompleted = noop,
}) => {
  const swiper = useRef<SwiperRef>();

  const [{ isBeginning, isEnd }, setState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const paragraphs = children
    .split('\n')
    .map((v) => v.trim())
    .filter((v) => !!v);

  const groups = groupParagraphs(paragraphs, 400);

  const handleOnSlideChange = (swiper: SwiperClass) => {
    setState((prev) => ({
      ...prev,
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    }));
  };

  const handleOnNext = () => {
    if (isEnd) onCompleted();
    else swiper.current.swiper.slideNext();
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
            className={classNames(styles.prev, {
              [styles.disabled]: isBeginning,
            })}
            color="tertiary"
            disabled={isBeginning}
            onClick={handleOnPrev}
          >
            <IonIcon icon={chevronBackSharp} />
          </IonFabButton>
          {!isEnd && (
            <IonFabButton color="tertiary" onClick={handleOnNext}>
              <IonIcon icon={chevronForwardSharp} />
            </IonFabButton>
          )}
          {isEnd && (
            <IonFabButton color="tertiary" onClick={handleOnNext}>
              <IonIcon icon={checkmarkSharp} />
            </IonFabButton>
          )}
        </div>
      </div>
    </div>
  );
};
