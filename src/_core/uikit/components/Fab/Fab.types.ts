import { ComponentProps } from 'react';

import { IonFab } from '@ionic/react';

type Props = ComponentProps<typeof IonFab>;

export type FabVertical = Props['vertical'];

export type FabHorizontal = Props['horizontal'];

export type FabPlacement = [FabHorizontal, FabVertical];
