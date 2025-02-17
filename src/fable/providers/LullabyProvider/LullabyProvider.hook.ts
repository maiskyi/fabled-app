import { useContext } from 'use-context-selector';

import { LullabyContext } from './LullabyProvider.context';
import { LullabySetVolume } from './LullabyProvider.types';

interface UseLullabyReturnState {
  volume: number;
}

interface UseLullabyReturnDispatch {
  play: () => void;
  setVolume: LullabySetVolume;
}

type UseLullabyReturnType = [UseLullabyReturnState, UseLullabyReturnDispatch];

export const useLullaby = (): UseLullabyReturnType => {
  const { play, volume, setVolume } = useContext(LullabyContext);

  return [{ volume }, { play, setVolume }];
};
