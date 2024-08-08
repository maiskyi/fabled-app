import {
  ComponentProps,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from 'react';
import classNames from 'classnames';

import { IonHeader, IonToolbar } from '@ionic/react';

import { HeaderTitle } from './HeaderTitle/HeaderTitle';
import { HeaderBack } from './HeaderBack/HeaderBack';
import { HeaderActions } from './HeaderActions/HeaderActions';
import { HeaderAction } from './HeaderAction/HeaderAction';

export type HeaderProps = PropsWithChildren<{
  className?: string;
  translucent?: boolean;
  collapse?: ComponentProps<typeof IonHeader>['collapse'];
}>;

interface HeaderComponent {
  (props: HeaderProps): ReactElement;
  Title: typeof HeaderTitle;
  Back: typeof HeaderBack;
  Actions: typeof HeaderActions;
  Action: typeof HeaderAction;
}

export const Header = forwardRef<any, HeaderProps>(function Header(
  { children, className, translucent, collapse },
  ref
) {
  return (
    <IonHeader
      ref={ref}
      className={classNames('ion-no-border', className)}
      translucent={translucent}
      collapse={collapse}
    >
      <IonToolbar>{children}</IonToolbar>
    </IonHeader>
  );
}) as unknown as HeaderComponent;

Header.Title = HeaderTitle;
Header.Back = HeaderBack;
Header.Actions = HeaderActions;
Header.Action = HeaderAction;
