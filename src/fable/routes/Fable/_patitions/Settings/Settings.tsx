import { FC, Fragment, useLayoutEffect } from 'react';

import { Fab } from '@core/uikit';

import { useLullaby } from '../../../../providers/LullabyProvider';
import { VolumeModal } from '../VolumeModal';
import { Setting } from '../../Fable.types';

export const Settings: FC = () => {
  const [, { play }] = useLullaby();

  useLayoutEffect(() => play());

  return (
    <Fragment>
      <Fab edge placement={['end', 'top']} slot="fixed">
        <Fab.Button color="light" icon="settings" />
        <Fab.List side="bottom">
          <Fab.Button icon="music" />
          <Fab.Button icon="volume-2" id={Setting.Volume} />
        </Fab.List>
      </Fab>
      <VolumeModal />
    </Fragment>
  );
};
