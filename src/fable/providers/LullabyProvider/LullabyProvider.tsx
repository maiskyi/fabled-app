import {
  FC,
  Fragment,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';
import { useLocalStorage } from 'react-use';

import { useConfig } from '@bootstrap/providers';

import { LullabyContext } from './LullabyProvider.context';
import { LullabySetVolume } from './LullabyProvider.types';
import { DEFAULT_VAL } from './LullabyProvider.const';

type LullabyProviderProps = PropsWithChildren<{}>;

export const LullabyProvider: FC<LullabyProviderProps> = ({ children }) => {
  const audio = useRef<HTMLAudioElement>();

  const [{ vol }, setSettings] = useLocalStorage('story.settings', {
    vol: DEFAULT_VAL,
  });

  const { lullabies } = useConfig();

  const play = useCallback(() => {
    audio.current.play();
  }, []);

  const setVolume: LullabySetVolume = useCallback(
    (params) => {
      setSettings((prev) => {
        const vol = params.value / 100;
        audio.current.volume = vol;
        return { ...prev, vol };
      });
    },
    [setSettings]
  );

  useLayoutEffect(() => {
    audio.current.volume = vol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <audio loop ref={audio}>
        <source src={lullabies[0].url} type="audio/mpeg" />
      </audio>
      <LullabyContext.Provider value={{ play, setVolume, volume: vol * 100 }}>
        {children}
      </LullabyContext.Provider>
    </Fragment>
  );
};
