/* eslint-disable react/prop-types */
import {
  Fragment,
  MouseEventHandler,
  ReactElement,
  useId,
  useRef,
} from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';
import { LocalizationContext } from '../../../contexts/LocalizationContext';
import { ICON } from '../../Icon';
import { FormInputOptionProps, FormInputOptionValue } from '../../../types';

import {
  FormPickerValidation,
  FormPickerComponent as FormPickerModalComponent,
} from './FormPicker.types';

import styles from './FormPicker.module.scss';

interface FormPickerProps<V extends FormInputOptionValue>
  extends FormControlBaseProps<FormPickerValidation> {
  placeholder?: string;
  component?: FormPickerModalComponent<V>;
  options: FormInputOptionProps<V>[];
}

interface FormPickerComponent {
  <V extends FormInputOptionValue = string>(
    props: FormPickerProps<V>
  ): ReactElement;
}

export const FormPicker: FormPickerComponent = ({
  options,
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
        picker: { placeholder },
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
    <FormControl inline type="picker" {...props}>
      {({ invalid, onChange, value }) => {
        const anchor = value
          ? options.find(({ value: v }) => value === v)?.label
          : placeholder;

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
              {anchor}
            </a>
            <IonModal
              presentingElement={ref?.current?.closest('ion-page')}
              ref={modal}
              trigger={id}
            >
              <IonHeader translucent>
                <IonToolbar>
                  <IonTitle>{props.label}</IonTitle>
                  <IonButtons slot="end">
                    <IonButton color="tertiary" onClick={handleOnDismiss}>
                      <IonIcon icon={ICON['close-outline']} slot="icon-only" />
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <Component
                dismiss={handleOnDismiss}
                onChange={onChange}
                options={options}
                value={value}
              />
            </IonModal>
          </Fragment>
        );
      }}
    </FormControl>
  );
};
