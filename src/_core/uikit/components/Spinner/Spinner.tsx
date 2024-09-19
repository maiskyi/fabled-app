import { memo } from 'react';

import { IonSpinner } from '@ionic/react';

export interface SpinnerProps {
  className?: string;
  variant?: 'dots' | 'circular';
  color?: Parameters<typeof IonSpinner>['0']['color'];
}

export const Spinner = memo<SpinnerProps>(function Spinner({
  variant = 'circular',
  color,
  className,
}: SpinnerProps) {
  return <IonSpinner className={className} color={color} name={variant} />;
});
