import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';

import { FormContext } from '../Form.context';
import { Button, ButtonProps } from '../../Button/Button';

interface FormSubmitProps extends Omit<ButtonProps, 'onClick' | 'type'> {}

export const FormSubmit: FC<FormSubmitProps> = ({ children, ...props }) => {
  const submit = useContextSelector(FormContext, ({ submit }) => submit);

  return (
    <Button {...props} onClick={submit} type="submit">
      {children}
    </Button>
  );
};
