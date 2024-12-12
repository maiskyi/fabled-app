import { FC } from 'react';

import { IonLoading } from '@ionic/react';

export interface LoadingProps {
  isOpen: boolean;
}

export const Loading: FC<LoadingProps> = ({ isOpen }) => {
  return (
    <IonLoading
      color="dark"
      isOpen={isOpen}
      mode="md"
      spinner="circular"
      translucent
    />
  );
};
