import { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import { useAsyncFn } from 'react-use';

import { Button } from '../Button';

import { defaultOnSkip, defaultOnCompleted } from './Onboarding.utils';
import { OnboardingItem } from './OnboardingItem/OnboardingItem';

import styles from './Onboarding.module.scss';

export type OnboardingProps = PropsWithChildren<{
  className?: string;
  onSkip?: () => Promise<unknown>;
  onCompleted?: () => Promise<unknown>;
}>;

interface OnboardingComponent {
  (props: OnboardingProps): ReactElement;
  Item: typeof OnboardingItem;
}

export const Onboarding: OnboardingComponent = ({
  children,
  className,
  onSkip = defaultOnSkip,
  onCompleted = defaultOnCompleted,
}: OnboardingProps) => {
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
        <div>
          <Button
            color="tertiary"
            fill="outline"
            loading={isSkipping}
            onClick={handleOnSkip}
          >
            Skip
          </Button>
        </div>
        <div className={styles.primary}>
          <Button loading={isCompleting} onClick={handleOnComplete}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

Onboarding.Item = OnboardingItem;
