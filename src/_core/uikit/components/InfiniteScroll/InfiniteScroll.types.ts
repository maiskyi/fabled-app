import { ComponentProps } from 'react';

import { IonInfiniteScroll } from '@ionic/react';

export type OnInfinite = ComponentProps<
  typeof IonInfiniteScroll
>['onIonInfinite'];
