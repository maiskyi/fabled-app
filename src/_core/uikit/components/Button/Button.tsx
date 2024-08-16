import { ComponentProps, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';

import { IonButton, IonSpinner } from '@ionic/react';
import { Color } from '@ionic/core';

import styles from './Button.module.scss';

import { ButtonSocial } from './ButtonSocial/ButtonSocial';

export type ButtonProps = PropsWithChildren<{
  block?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  type?: ComponentProps<typeof IonButton>['type'];
  fill?: ComponentProps<typeof IonButton>['fill'];
  color?: Color;
}>;

interface ButtonComponent {
  (props: ButtonProps): ReactElement;
  Social: typeof ButtonSocial;
}

export const Button: ButtonComponent = ({
  fill,
  onClick,
  color,
  children,
  className,
  block = true,
  type = 'button',
  loading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <IonButton
      className={classNames(styles.root, className)}
      color={color}
      disabled={disabled}
      expand={block ? 'block' : undefined}
      fill={fill}
      mode="ios"
      onClick={onClick}
      shape="round"
      type={type}
    >
      {loading && (
        <IonSpinner className={styles.spinner} color={color} name="circular" />
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
