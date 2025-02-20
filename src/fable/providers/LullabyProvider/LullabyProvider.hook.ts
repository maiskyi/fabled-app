import { useContext } from 'use-context-selector';

import { LullabyContext } from './LullabyProvider.context';
import { LullabySetVolume, LullabySetMelody } from './LullabyProvider.types';

interface UseLullabyReturnState {
  volume: number;
  lullaby: string;
}

interface UseLullabyReturnDispatch {
  play: () => void;
  setVolume: LullabySetVolume;
  setLullaby: LullabySetMelody;
}

type UseLullabyReturnType = [UseLullabyReturnState, UseLullabyReturnDispatch];

export const useLullaby = (): UseLullabyReturnType => {
  const { play, volume, setVolume, lullaby, setLullaby } =
    useContext(LullabyContext);

  return [
    { lullaby, volume },
    { play, setLullaby, setVolume },
  ];
};
