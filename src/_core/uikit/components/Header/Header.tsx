import {
  ComponentProps,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from 'react';
import classNames from 'classnames';

import { IonCol, IonGrid, IonHeader, IonRow, IonToolbar } from '@ionic/react';

import { Selector } from '../../constants/selector.const';

import { HeaderTitle } from './HeaderTitle/HeaderTitle';
import { HeaderBack } from './HeaderBack/HeaderBack';
import { HeaderActions } from './HeaderActions/HeaderActions';
import { HeaderAction } from './HeaderAction/HeaderAction';

export type HeaderProps = PropsWithChildren<{
  className?: string;
  translucent?: boolean;
  fixed?: boolean;
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
      className={classNames('ion-no-border', className)}
      collapse={collapse}
      id={Selector.Header}
      ref={ref}
      translucent={translucent}
    >
      <IonGrid className="ion-no-padding" fixed>
        <IonRow>
          <IonCol className="ion-no-padding">
            <IonToolbar>{children}</IonToolbar>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>
  );
}) as unknown as HeaderComponent;

Header.Title = HeaderTitle;
Header.Back = HeaderBack;
Header.Actions = HeaderActions;
Header.Action = HeaderAction;
