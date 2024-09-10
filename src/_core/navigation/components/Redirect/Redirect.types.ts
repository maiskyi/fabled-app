import { useIonRouter } from '@ionic/react';

type UseIonRouterReturnType = ReturnType<typeof useIonRouter>;

export type RedirectDirection = Parameters<UseIonRouterReturnType['push']>['1'];
