import { ComponentProps, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';

import { IonButton, IonSpinner } from '@ionic/react';

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
}>;

interface ButtonComponent {
  (props: ButtonProps): ReactElement;
  Social: typeof ButtonSocial;
}

export const Button: ButtonComponent = ({
  fill,
  onClick,
  children,
  className,
  block = true,
  type = 'button',
  loading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <IonButton
      mode="ios"
      fill={fill}
      type={type}
      shape="round"
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.root, className)}
      expand={block ? 'block' : undefined}
    >
      {loading && <IonSpinner name="circular" className={styles.spinner} />}
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
