import { noop } from 'lodash';
import { createContext } from 'use-context-selector';

interface FormRadioGroupContextProps {
  invalid: boolean;
  value: string;
  onChange: (...args: any[]) => void;
}

export const FormRadioGroupContext = createContext<FormRadioGroupContextProps>({
  invalid: false,
  onChange: noop,
  value: null,
});
