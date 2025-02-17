import { noop } from 'lodash';
import { createContext } from 'use-context-selector';

import { LullabySetVolume } from './LullabyProvider.types';
import { DEFAULT_VAL } from './LullabyProvider.const';

export interface LullabyContextProps {
  play: () => void;
  volume: number;
  setVolume: LullabySetVolume;
}

export const LullabyContext = createContext<LullabyContextProps>({
  play: noop,
  setVolume: noop,
  volume: DEFAULT_VAL * 100,
});
