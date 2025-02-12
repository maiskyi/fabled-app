import { FC, Fragment } from 'react';

import { Fab } from '@core/uikit';

export const Lullaby: FC = () => {
  return (
    <Fragment>
      <audio autoPlay>
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your brows
      </audio>
      <Fab.Button color="light" icon="music"></Fab.Button>
    </Fragment>
  );
};
