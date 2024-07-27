import { ReactElement } from 'react';

import classNames from 'classnames';
import { Controller } from 'react-hook-form';

import styles from './FormControl.module.scss';

import { useFormControlRules } from '../_hooks/useFormControlRules/useFormControlRules.hook';

import {
  FormControlChildren,
  FormControlBaseProps,
  FormControlBaseValidation,
  FormControlType,
} from './FormControl.types';

interface FormControlProps<T extends FormControlBaseValidation>
  extends FormControlBaseProps<T> {
  className?: string;
  isReadOnly?: boolean;
  type: FormControlType;
  children: FormControlChildren;
}

interface FormControlComponent {
  (props: FormControlProps<FormControlBaseValidation>): ReactElement;
}

export const FormControl: FormControlComponent = ({
  type,
  name,
  label,
  children,
  className,
  errors = {},
  validation = {},
  help: initialHelp,
}: FormControlProps<{}>) => {
  const { rules } = useFormControlRules({
    name,
    type,
    label,
    errors,
    validation,
  });

  return (
    <Controller
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
      }) => {
        const help = (() => {
          if (Array.isArray(initialHelp)) {
            return initialHelp.join('\n');
          }
          if (typeof initialHelp === 'function') {
            return initialHelp({ value });
          }
          return initialHelp;
        })();

        const content = children({
          value,
          onChange,
          onBlur,
          invalid,
          error,
          help,
        });

        return (
          <div className={classNames(styles.default, className)}>{content}</div>
        );
      }}
    />
  );
};
