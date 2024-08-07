import { FC, Fragment, PropsWithChildren, useCallback } from 'react';

import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';

import { OnInfinite } from './InfiniteScroll.types';

export type InfiniteScrollProps = PropsWithChildren<{
  disabled: boolean;
  onScroll: () => Promise<unknown>;
}>;

export const InfiniteScroll: FC<InfiniteScrollProps> = ({
  disabled,
  children,
  onScroll,
}) => {
  const handleOnIonInfinite: OnInfinite = useCallback(
    async (event) => {
      await onScroll();
      event.target.complete();
    },
    [onScroll]
  );

  return (
    <Fragment>
      {children}
      <IonInfiniteScroll
        threshold="30%"
        disabled={disabled}
        onIonInfinite={handleOnIonInfinite}
      >
        <IonInfiniteScrollContent />
      </IonInfiniteScroll>
    </Fragment>
  );
};