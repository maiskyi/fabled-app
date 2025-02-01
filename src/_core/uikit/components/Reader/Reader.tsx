import { FC, useRef, useState } from 'react';
import classNames from 'classnames';
import { useAsyncFn } from 'react-use';

import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IonFabButton, IonIcon, IonSpinner } from '@ionic/react';

import { Typography } from '../Typography';
import { ICON } from '../Icon';

import { groupParagraphs, defaultOnCompleted } from './Reader.utils';

import styles from './Reader.module.scss';

export interface ReaderProps {
  children?: string;
  onCompleted?: () => Promise<void>;
}

export const Reader: FC<ReaderProps> = ({
  children = '',
  onCompleted = defaultOnCompleted,
}) => {
  const swiper = useRef<SwiperRef>();

  const [{ loading: isCompleting }] = useAsyncFn(async () => {
    await onCompleted();
  });

  const [{ isBeginning, isEnd }, setState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const groups = groupParagraphs(children, 250);

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
          dynamicBullets: true,
          dynamicMainBullets: 10,
          el: `.${styles.swiperPagination}`,
        }}
        ref={swiper}
      >
        {groups.map((items, index) => {
          return (
            <SwiperSlide className={styles.slide} key={index}>
              <div className={styles.box}>
                {items
                  .split('\n')
                  .filter((v) => !!v)
                  .map((text) => {
                    return (
                      <Typography
                        className={styles.text}
                        key={text}
                        variant="body-1"
                      >
                        {text}
                      </Typography>
                    );
                  })}
              </div>
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
            color="primary"
            disabled={isBeginning}
            onClick={handleOnPrev}
          >
            <IonIcon icon={ICON['chevron-left']} />
          </IonFabButton>
          {!isEnd && (
            <IonFabButton color="primary" onClick={handleOnNext}>
              <IonIcon icon={ICON['chevron-right']} />
            </IonFabButton>
          )}
          {isEnd && (
            <IonFabButton color="primary" onClick={handleOnNext}>
              {isCompleting ? (
                <IonSpinner name="circular" />
              ) : (
                <IonIcon icon={ICON['check']} />
              )}
            </IonFabButton>
          )}
        </div>
      </div>
    </div>
  );
};
