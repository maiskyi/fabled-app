import { ComponentProps, PropsWithChildren, ReactElement } from 'react';

import { IonButton, IonSpinner } from '@ionic/react';
import classNames from 'classnames';

import styles from './Button.module.scss';

import { ButtonSocial } from './ButtonSocial/ButtonSocial';

export type ButtonProps = PropsWithChildren<{
  block?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  type?: ComponentProps<typeof IonButton>['type'];
}>;

interface ButtonComponent {
  (props: ButtonProps): ReactElement;
  Social: typeof ButtonSocial;
}

export const Button: ButtonComponent = ({
  children,
  onClick,
  className,
  block = true,
  type = 'button',
  disabled = false,
  loading = false,
}: ButtonProps) => {
  return (
    <IonButton
      type={type}
      disabled={disabled}
      shape="round"
      mode="ios"
      onClick={onClick}
      className={classNames(styles.root, className)}
      expand={block ? 'block' : undefined}
    >
      {loading && <IonSpinner className={styles.spinner} />}
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
