import { FC, PropsWithChildren } from 'react';

import styles from './OnboardingHl.module.scss';

type OnboardingHlProps = PropsWithChildren<{}>;

export const OnboardingHl: FC<OnboardingHlProps> = ({ children }) => {
  return <span className={styles.root}>{children}</span>;
};
