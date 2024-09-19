import { memo } from 'react';

import { IonSpinner } from '@ionic/react';

export interface SpinnerProps {
  variant?: 'dots' | 'circular';
  color?: Parameters<typeof IonSpinner>['0']['color'];
}

export const Spinner = memo<SpinnerProps>(function Spinner({
  variant,
  color,
}: SpinnerProps) {
  return <IonSpinner color={color} name={variant} />;
});
