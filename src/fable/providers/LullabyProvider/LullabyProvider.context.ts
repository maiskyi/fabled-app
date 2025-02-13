import { noop } from 'lodash';
import { createContext } from 'use-context-selector';

export interface LullabyContextProps {
  play: () => void;
}

export const LullabyContext = createContext<LullabyContextProps>({
  play: noop,
});
