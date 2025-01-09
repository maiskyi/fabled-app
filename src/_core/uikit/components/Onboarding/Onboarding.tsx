import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useAsyncFn } from 'react-use';

import { Button } from '../Button';

import { defaultOnSkip, defaultOnCompleted } from './Onboarding.utils';

import styles from './Onboarding.module.scss';

export type OnboardingProps = PropsWithChildren<{
  className?: string;
  onSkip?: () => Promise<unknown>;
  onCompleted?: () => Promise<unknown>;
}>;

export const Onboarding: FC<OnboardingProps> = ({
  children,
  className,
  onSkip = defaultOnSkip,
  onCompleted = defaultOnCompleted,
}) => {
  const [{ loading: isSkipping }, handleOnSkip] = useAsyncFn(async () => {
    await onSkip();
    return true;
  });

  const [{ loading: isCompleting }, handleOnComplete] = useAsyncFn(async () => {
    await onCompleted();
    return true;
  });

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.slides}>{children}</div>
      <div className={styles.nav}>
        <Button
          color="tertiary"
          fill="outline"
          loading={isSkipping}
          onClick={handleOnSkip}
        >
          Skip
        </Button>
        <Button loading={isCompleting} onClick={handleOnComplete}>
          Next
        </Button>
      </div>
    </div>
  );
};
