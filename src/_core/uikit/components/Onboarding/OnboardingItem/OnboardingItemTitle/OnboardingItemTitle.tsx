import { FC, PropsWithChildren } from 'react';

import { IonText } from '@ionic/react';

import styles from './OnboardingItemTitle.module.scss';

type OnboardingItemTitleProps = PropsWithChildren<{}>;

export const OnboardingItemTitle: FC<OnboardingItemTitleProps> = ({
  children,
}) => {
  return <IonText className={styles.root}>{children}</IonText>;
};
