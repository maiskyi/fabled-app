import {
  ComponentProps,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from 'react';

import { IonHeader, IonToolbar } from '@ionic/react';

import { HeaderTitle } from './HeaderTitle/HeaderTitle';

export type HeaderProps = PropsWithChildren<{
  className?: string;
  translucent?: boolean;
  collapse?: ComponentProps<typeof IonHeader>['collapse'];
}>;

interface HeaderComponent {
  (props: HeaderProps): ReactElement;
  Title: typeof HeaderTitle;
}

export const Header = forwardRef<HTMLIonHeaderElement, HeaderProps>(
  function Header({ children, className, translucent, collapse }, ref) {
    return (
      <IonHeader
        ref={ref}
        className={className}
        translucent={translucent}
        collapse={collapse}
      >
        <IonToolbar>{children}</IonToolbar>
      </IonHeader>
    );
  }
) as unknown as HeaderComponent;

Header.Title = HeaderTitle;
