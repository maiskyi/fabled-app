import { noop } from 'lodash';
import { createContext } from 'use-context-selector';

import { FormRadioGroupValue } from './FormRadioGroup.types';

interface FormRadioGroupContextProps {
  invalid: boolean;
  value: FormRadioGroupValue;
  onChange: (...args: any[]) => void;
}

export const FormRadioGroupContext = createContext<FormRadioGroupContextProps>({
  invalid: false,
  onChange: noop,
  value: null,
});
