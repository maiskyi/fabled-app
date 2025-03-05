import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonButton, IonSpinner, IonIcon } from '@ionic/react';

import { ButtonSocialName } from './ButtonSocial.type';
import { ICONS_MAPPING } from './ButtonSocial.const';

import styles from '../Button.module.scss';

type ButtonSocialProps = PropsWithChildren<{
  name: ButtonSocialName;
  loading?: boolean;
  onClick?: () => void;
  expand?: 'block' | 'full';
}>;

export const ButtonSocial: FC<ButtonSocialProps> = ({
  name,
  expand,
  loading = false,
  onClick,
  children,
}) => {
  return (
    <IonButton color="medium" expand={expand} onClick={onClick} shape="round">
      {loading && <IonSpinner className={styles.spinner} name="crescent" />}
      <IonIcon
        className={classNames({
          [styles.transparent]: loading,
        })}
        icon={ICONS_MAPPING[name]}
      />
      {!!children && (
        <span
          className={classNames({
            [styles.transparent]: loading,
          })}
        >
          {children}
        </span>
      )}
    </IonButton>
  );
};
