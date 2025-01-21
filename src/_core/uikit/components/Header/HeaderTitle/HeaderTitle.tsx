import { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonTitle } from '@ionic/react';

import styles from './HeaderTitle.module.scss';

type HeaderTitleProps = PropsWithChildren<{
  wrap?: boolean;
  size?: ComponentProps<typeof IonTitle>['size'];
}>;

export const HeaderTitle: FC<HeaderTitleProps> = ({ wrap, size, children }) => {
  return (
    <IonTitle
      className={classNames(styles.root, {
        [styles.large]: size === 'large',
      })}
      size={size}
    >
      {wrap ? <span className="ion-text-wrap">{children}</span> : children}
    </IonTitle>
  );
};
