import { FC, Fragment, useLayoutEffect, useRef } from 'react';

import { Fab } from '@core/uikit';
import { useConfig } from '@bootstrap/providers';

export const Lullaby: FC = () => {
  const audio = useRef<HTMLAudioElement>();

  const { lullabies } = useConfig();

  useLayoutEffect(() => {
    audio.current.addEventListener('canplaythrough', () => {
      audio.current.play();
    });
  });

  return (
    <Fragment>
      <audio ref={audio}>
        <source src={lullabies[0].url} type="audio/mpeg" />
      </audio>
      <Fab placement={['end', 'top']} slot="fixed">
        <Fab.Button></Fab.Button>
      </Fab>
    </Fragment>
  );
};
