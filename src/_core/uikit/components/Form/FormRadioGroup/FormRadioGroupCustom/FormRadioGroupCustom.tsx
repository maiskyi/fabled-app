import { ReactElement } from 'react';
import { useContextSelector } from 'use-context-selector';

import { FormRadioGroupContext } from '../FormRadioGroup.context';
import { FormRadioGroupValue } from '../FormRadioGroup.types';

interface FormRadioGroupCustomChildrenProps<T extends FormRadioGroupValue> {
  value: T;
  onSelect: () => void;
}

interface FormRadioGroupCustomProps<T extends FormRadioGroupValue> {
  value: T;
  children?: (props: FormRadioGroupCustomChildrenProps<T>) => ReactElement;
}

interface FormRadioGroupCustomComponent {
  <T extends FormRadioGroupValue = string>(
    props: FormRadioGroupCustomProps<T>
  ): ReactElement;
}

export const FormRadioGroupCustom: FormRadioGroupCustomComponent = ({
  value: val,
  children = () => null,
}) => {
  const value = useContextSelector(FormRadioGroupContext, ({ value }) => value);

  const onChange = useContextSelector(
    FormRadioGroupContext,
    ({ onChange }) => onChange
  );

  const onSelect = () => onChange(val);

  // @ts-ignore
  return <>{children({ onSelect, value })}</>;
};
