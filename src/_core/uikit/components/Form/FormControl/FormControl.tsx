import { ReactElement } from 'react';
import { Controller } from 'react-hook-form';
import classNames from 'classnames';

import { useFormControlRules } from '../_hooks/useFormControlRules/useFormControlRules.hook';

import {
  FormControlChildren,
  FormControlBaseProps,
  FormControlBaseValidation,
  FormControlType,
} from './FormControl.types';

import styles from '../Form.module.scss';

interface FormControlProps<T extends FormControlBaseValidation>
  extends FormControlBaseProps<T> {
  inline?: boolean;
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
  inline,
  className,
  errors = {},
  validation = {},
  help: initialHelp,
}: FormControlProps<{}>) => {
  const { rules } = useFormControlRules({
    errors,
    label,
    name,
    type,
    validation,
  });

  return (
    <Controller
      name={name}
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
          error,
          help,
          invalid,
          onBlur,
          onChange,
          value,
        });

        if (inline) return <>{content}</>;

        return (
          <div className={classNames(styles.control, className)}>{content}</div>
        );
      }}
      rules={rules}
    />
  );
};
