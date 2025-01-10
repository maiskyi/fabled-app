import { FC, PropsWithChildren } from 'react';

import { IonText } from '@ionic/react';

import styles from './OnboardingItemDescription.module.scss';

type OnboardingItemDescriptionProps = PropsWithChildren<{}>;

export const OnboardingItemDescription: FC<OnboardingItemDescriptionProps> = ({
  children,
}) => {
  return <IonText className={styles.root}>{children}</IonText>;
};
