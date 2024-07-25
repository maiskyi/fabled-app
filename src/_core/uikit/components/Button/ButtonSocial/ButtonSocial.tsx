import { FC, PropsWithChildren } from 'react';

import { IonButton, IonSpinner } from '@ionic/react';
import classNames from 'classnames';

import styles from './ButtonSocial.module.scss';

import { Icon } from '../../Icon';

import { ButtonSocialName } from './ButtonSocial.type';
import { ICONS_MAPPING } from './ButtonSocial.const';

type ButtonSocialProps = PropsWithChildren<{
  name: ButtonSocialName;
  loading?: boolean;
}>;

export const ButtonSocial: FC<ButtonSocialProps> = ({
  name,
  children,
  loading = false,
}) => {
  return (
    <IonButton fill="outline" shape="round">
      {loading && <IonSpinner className={styles.spinner} />}
      <Icon
        slot="start"
        name={ICONS_MAPPING[name]}
        className={classNames({
          [styles.transparent]: loading,
        })}
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
