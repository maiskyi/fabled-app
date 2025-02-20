import {
  FC,
  Fragment,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import { useLocalStorage } from 'react-use';
import { get } from 'lodash';

import { useConfig } from '@bootstrap/providers';

import { LullabyContext } from './LullabyProvider.context';
import { LullabySetVolume, LullabySetMelody } from './LullabyProvider.types';
import { DEFAULT_VAL } from './LullabyProvider.const';

type LullabyProviderProps = PropsWithChildren<{}>;

export const LullabyProvider: FC<LullabyProviderProps> = ({ children }) => {
  const audio = useRef<HTMLAudioElement>();

  const { lullabies } = useConfig();

  const [{ vol, lullaby }, setSettings] = useLocalStorage('story.settings', {
    lullaby: get(lullabies, [0, 'id']),
    vol: DEFAULT_VAL,
  });

  const music = useMemo(() => {
    return lullabies.find(({ id }) => id === lullaby);
  }, [lullabies, lullaby]);

  const play = useCallback(() => {
    audio.current.play();
  }, []);

  const setVolume: LullabySetVolume = useCallback(
    (params) => {
      const vol = params.value / 100;
      setSettings({ lullaby, vol });
      audio.current.volume = vol;
    },
    [setSettings, lullaby]
  );

  const setLullaby: LullabySetMelody = useCallback(
    ({ value }) => {
      setSettings({ lullaby: value, vol });
      audio.current.src = lullabies.find(({ id }) => id === value)?.url;
    },
    [setSettings, lullabies, vol]
  );

  useLayoutEffect(() => {
    audio.current.volume = vol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <audio loop ref={audio} src={music?.url} />
      <LullabyContext.Provider
        value={{ lullaby, play, setLullaby, setVolume, volume: vol * 100 }}
      >
        {children}
      </LullabyContext.Provider>
    </Fragment>
  );
};
