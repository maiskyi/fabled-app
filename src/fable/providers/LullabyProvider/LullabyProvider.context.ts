import { noop } from 'lodash';
import { createContext } from 'use-context-selector';

import { LullabySetVolume, LullabySetMelody } from './LullabyProvider.types';
import { DEFAULT_VAL } from './LullabyProvider.const';

export interface LullabyContextProps {
  play: () => void;
  volume: number;
  lullaby: string;
  setVolume: LullabySetVolume;
  setLullaby: LullabySetMelody;
}

export const LullabyContext = createContext<LullabyContextProps>({
  lullaby: null,
  play: noop,
  setLullaby: noop,
  setVolume: noop,
  volume: DEFAULT_VAL * 100,
});
