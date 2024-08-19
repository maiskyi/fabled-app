import { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import { useContextSelector } from 'use-context-selector';

import { FormControl, FormControlBaseProps } from '../FormControl';
import { LocalizationContext } from '../../../contexts/LocalizationContext';

import { FormInlineValidation } from './FormInline.types';

import styles from './FormInline.module.scss';

interface FormInlineProps extends FormControlBaseProps<FormInlineValidation> {
  placeholder?: string;
}

export const FormInline: FC<FormInlineProps> = ({
  placeholder: initialPlaceholder,
  ...props
}) => {
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

  return (
    <FormControl inline type="inline" {...props}>
      {({ help, error, onBlur, invalid, onChange, value = '' }) => {
        return (
          <a
            className={classNames(styles.root, {
              [styles.none]: !value,
              [styles.invalid]: invalid,
            })}
            href="/"
            onClick={handleOnClick}
          >
            {value || placeholder}
          </a>
        );
      }}
    </FormControl>
  );
};
