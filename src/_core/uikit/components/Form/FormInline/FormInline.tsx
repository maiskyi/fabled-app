import { FC, Fragment, MouseEventHandler, useId, useRef } from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonModal,
  IonToolbar,
} from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';
import { LocalizationContext } from '../../../contexts/LocalizationContext';
import { ICON } from '../../Icon';

import { FormInlineValidation, FormInlineComponent } from './FormInline.types';

import styles from './FormInline.module.scss';

interface FormInlineProps extends FormControlBaseProps<FormInlineValidation> {
  placeholder?: string;
  component?: FormInlineComponent;
}

export const FormInline: FC<FormInlineProps> = ({
  placeholder: initialPlaceholder,
  component: Component = Fragment,
  ...props
}) => {
  const id = useId();
  const ref = useRef<HTMLAnchorElement>();
  // eslint-disable-next-line no-undef
  const modal = useRef<HTMLIonModalElement>();

  const placeholder = useContextSelector(
    LocalizationContext,
    ({
      form: {
        inline: { placeholder },
      },
    }) =>
      initialPlaceholder ||
      placeholder({ label: props.label, name: props.name }).toLowerCase()
  );

  const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
  };

  const handleOnDismiss = () => {
    modal?.current.dismiss();
  };

  return (
    <FormControl inline type="inline" {...props}>
      {({
        // help, error, onBlur,
        invalid,
        onChange,
        value = '',
      }) => {
        return (
          <Fragment>
            <a
              className={classNames(styles.root, {
                [styles.none]: !value,
                [styles.invalid]: invalid,
              })}
              href="/"
              id={id}
              onClick={handleOnClick}
              ref={ref}
            >
              {value || placeholder}
            </a>
            <IonModal
              presentingElement={ref?.current?.closest('ion-page')}
              ref={modal}
              trigger={id}
            >
              <IonHeader translucent>
                <IonToolbar>
                  <IonButtons slot="end">
                    <IonButton onClick={handleOnDismiss}>
                      <IonIcon icon={ICON['close-outline']} slot="icon-only" />
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <Component
                  dismiss={handleOnDismiss}
                  onChange={onChange}
                  value={value}
                />
              </IonContent>
              <IonFooter collapse="fade">
                <IonToolbar />
              </IonFooter>
            </IonModal>
          </Fragment>
        );
      }}
    </FormControl>
  );
};
