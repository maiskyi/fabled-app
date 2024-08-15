import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonButton, IonSpinner } from '@ionic/react';

import styles from '../Button.module.scss';

import { Icon } from '../../Icon';

import { ButtonSocialName } from './ButtonSocial.type';
import { ICONS_MAPPING } from './ButtonSocial.const';

type ButtonSocialProps = PropsWithChildren<{
  name: ButtonSocialName;
  loading?: boolean;
  onClick?: () => void;
  expand?: 'block' | 'full';
}>;

export const ButtonSocial: FC<ButtonSocialProps> = ({
  name,
  expand,
  children,
  loading = false,
  onClick,
}) => {
  return (
    <IonButton expand={expand} fill="outline" onClick={onClick} shape="round">
      {loading && <IonSpinner className={styles.spinner} name="circular" />}
      <Icon
        className={classNames({
          [styles.transparent]: loading,
        })}
        name={ICONS_MAPPING[name]}
        slot="start"
      />
      <span
        className={classNames({
          [styles.transparent]: loading,
        })}
      >
        {children}
      </span>
    </IonButton>
  );
};
