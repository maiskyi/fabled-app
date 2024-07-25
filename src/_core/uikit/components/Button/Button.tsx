import { PropsWithChildren, ReactElement } from 'react';

import { IonButton } from '@ionic/react';

import { ButtonSocial } from './ButtonSocial/ButtonSocial';

export type ButtonProps = PropsWithChildren<{}>;

interface ButtonComponent {
  (props: ButtonProps): ReactElement;
  Social: typeof ButtonSocial;
}

// eslint-disable-next-line react/prop-types
export const Button: ButtonComponent = ({ children }) => {
  return <IonButton>{children}</IonButton>;
};

Button.Social = ButtonSocial;
