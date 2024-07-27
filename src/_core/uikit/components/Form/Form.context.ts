import { noop } from 'lodash';
import { createContext } from 'use-context-selector';

interface FormContextProps {
  submit: () => void;
}

export const FormContext = createContext<FormContextProps>({
  submit: noop,
});
