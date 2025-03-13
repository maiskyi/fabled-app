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

import { IonModal } from '@ionic/react';

import { FormControl, FormControlBaseProps } from '../FormControl';
import { LocalizationContext } from '../../../contexts/LocalizationContext';
import { FormInputOptionProps, FormInputOptionValue } from '../../../types';
import { Header } from '../../Header';

import {
  FormPickerValidation,
  FormPickerHeight,
  FormPickerWidth,
  FormPickerComponent as FormPickerModalComponent,
} from './FormPicker.types';

import styles from './FormPicker.module.scss';

interface FormPickerProps<V extends FormInputOptionValue>
  extends FormControlBaseProps<FormPickerValidation> {
  placeholder?: string;
  height?: FormPickerHeight;
  width?: FormPickerWidth;
  component?: FormPickerModalComponent<V>;
  options?: FormInputOptionProps<V>[];
}

interface FormPickerComponent {
  <V extends FormInputOptionValue = string>(
    props: FormPickerProps<V>
  ): ReactElement;
}

export const FormPicker: FormPickerComponent = ({
  height = 'auto',
  width = 'auto',
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
      (
        initialPlaceholder ||
        placeholder({ label: props.label, name: props.name })
      ).toLowerCase()
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
        const anchor = (() => {
          if (value && options?.length) {
            return options.find(({ value: v }) => value === v)?.label;
          }
          if (value && !options?.length) {
            return value;
          }
          return placeholder;
        })();

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
              backdropDismiss={false}
              breakpoints={[0, 1]}
              className={classNames(styles.modal, {
                [styles.autoHeight]: height === 'auto',
                [styles.autoHeight]: height === 'auto',
                [styles.fullWidth]: width === 'full',
              })}
              initialBreakpoint={1}
              presentingElement={ref?.current?.closest('ion-page')}
              ref={modal}
              showBackdrop={true}
              trigger={id}
            >
              <Header transparent>
                <Header.Buttons>
                  <Header.Button
                    icon="close-outline"
                    onClick={handleOnDismiss}
                  ></Header.Button>
                </Header.Buttons>
              </Header>
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
