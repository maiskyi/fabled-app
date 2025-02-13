import { FC, useLayoutEffect } from 'react';

import { Fab } from '@core/uikit';

import { useLullaby } from '../../../../providers/LullabyProvider';

export const Settings: FC = () => {
  const { play } = useLullaby();

  useLayoutEffect(() => play());

  return (
    <Fab placement={['end', 'top']} slot="fixed">
      <Fab.Button color="light" icon="settings" />
      <Fab.List side="bottom">
        <Fab.Button icon="music" />
        <Fab.Button icon="volume-2" />
      </Fab.List>
    </Fab>
  );
};
