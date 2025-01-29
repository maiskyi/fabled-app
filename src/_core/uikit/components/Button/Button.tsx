import { ComponentProps, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import { noop } from 'lodash';

import { IonButton, IonIcon, IonSpinner } from '@ionic/react';
import { Color } from '@ionic/core';

import { ICON, IconName } from '../Icon';

import { ButtonSocial } from './ButtonSocial/ButtonSocial';
import { SPINNER_COLOR_MAPPING } from './Button.const';

import styles from './Button.module.scss';

export type ButtonProps = PropsWithChildren<{
  block?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  type?: ComponentProps<typeof IonButton>['type'];
  fill?: ComponentProps<typeof IonButton>['fill'];
  color?: Color;
  size?: ComponentProps<typeof IonButton>['size'];
  icon?: IconName;
}>;

interface ButtonComponent {
  (props: ButtonProps): ReactElement;
  Social: typeof ButtonSocial;
}

export const Button: ButtonComponent = ({
  fill = 'solid',
  onClick,
  color = 'primary',
  children,
  className,
  block = true,
  type = 'button',
  loading = false,
  disabled = false,
  size = 'default',
  icon,
}: ButtonProps) => {
  return (
    <IonButton
      className={classNames(
        styles.root,
        styles[color],
        styles[size],
        styles[fill],
        className
      )}
      color={color}
      disabled={disabled}
      expand={block ? 'block' : undefined}
      fill={fill}
      onClick={loading ? noop : onClick}
      shape="round"
      size={size}
      type={type}
    >
      {!!icon && (
        <IonIcon
          className={classNames(styles.icon, {
            [styles.transparent]: loading,
          })}
          icon={ICON[icon]}
          slot="start"
        />
      )}
      {loading && (
        <IonSpinner
          className={classNames(styles.spinner, styles[size])}
          color={SPINNER_COLOR_MAPPING[color]}
          name="crescent"
        />
      )}
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

Button.Social = ButtonSocial;
