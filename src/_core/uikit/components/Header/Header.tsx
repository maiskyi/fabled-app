import {
  ComponentProps,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import { IonCol, IonGrid, IonHeader, IonRow, IonToolbar } from '@ionic/react';

import { Selector } from '../../constants/selector.const';
import { CoverContext } from '../../contexts/CoverContext';
import { DeviceContext } from '../../contexts/DeviceContext';

import { HeaderTitle } from './HeaderTitle/HeaderTitle';
import { HeaderBack } from './HeaderBack/HeaderBack';
import { HeaderActions } from './HeaderActions/HeaderActions';
import { HeaderAction } from './HeaderAction/HeaderAction';

import styles from './Header.module.scss';

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
  const withCover = useContextSelector(
    CoverContext,
    ({ withCover }) => withCover
  );

  const isDesktop = useContextSelector(
    DeviceContext,
    ({ isDesktop }) => isDesktop
  );

  return (
    <IonHeader
      className={classNames(
        styles.root,
        'ion-no-border',
        {
          [styles.transparent]: withCover,
        },
        className
      )}
      collapse={collapse}
      id={Selector.Header}
      ref={ref}
      translucent={translucent}
    >
      <IonGrid className="ion-no-padding" fixed={isDesktop}>
        <IonRow>
          <IonCol className="ion-no-padding">
            <IonToolbar
              className={classNames(styles.toolbar, {
                [styles.transparent]: withCover,
              })}
            >
              {children}
            </IonToolbar>
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
