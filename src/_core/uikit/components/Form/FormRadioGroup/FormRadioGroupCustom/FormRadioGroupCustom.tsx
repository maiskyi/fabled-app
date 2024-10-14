import { noop } from 'lodash';
import { FC, ReactElement } from 'react';
import { useContextSelector } from 'use-context-selector';

import { FormRadioGroupContext } from '../FormRadioGroup.context';

interface FormRadioGroupCustomChildrenProps {
  value: string;
  onSelect: () => void;
}

interface FormRadioGroupCustomProps {
  value: string;
  children?: (props: FormRadioGroupCustomChildrenProps) => ReactElement;
}

export const FormRadioGroupCustom: FC<FormRadioGroupCustomProps> = ({
  value: val,
  children = noop,
}) => {
  const value = useContextSelector(FormRadioGroupContext, ({ value }) => value);

  const onChange = useContextSelector(
    FormRadioGroupContext,
    ({ onChange }) => onChange
  );

  const onSelect = () => onChange(val);

  return <>{children({ onSelect, value })}</>;
};
