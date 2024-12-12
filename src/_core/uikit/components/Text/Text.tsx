import { FC, PropsWithChildren, createElement } from 'react';
import classNames from 'classnames';

import { IonText } from '@ionic/react';

import styles from './Text.module.scss';

export type TextProps = PropsWithChildren<{
  truncate?: number;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}>;

export const Text: FC<TextProps> = ({
  children,
  className,
  variant = 'p',
  truncate,
}) => {
  return (
    <IonText style={{ '--truncate': truncate }}>
      {createElement(
        variant,
        {
          className: classNames(
            styles.variant,
            variant,
            {
              [styles.truncate]: !!truncate,
            },
            className
          ),
        },
        children
      )}
    </IonText>
  );
};
