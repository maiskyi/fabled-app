import { FC, Fragment, PropsWithChildren, useCallback, useRef } from 'react';

import { useConfig } from '@bootstrap/providers';

import { LullabyContext } from './LullabyProvider.context';

type LullabyProviderProps = PropsWithChildren<{}>;

export const LullabyProvider: FC<LullabyProviderProps> = ({ children }) => {
  const audio = useRef<HTMLAudioElement>();

  const { lullabies } = useConfig();

  const play = useCallback(() => {
    audio.current.play();
  }, []);

  return (
    <Fragment>
      <audio loop ref={audio}>
        <source src={lullabies[0].url} type="audio/mpeg" />
      </audio>
      <LullabyContext.Provider value={{ play }}>
        {children}
      </LullabyContext.Provider>
    </Fragment>
  );
};
