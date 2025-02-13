import { FC, useCallback, useLayoutEffect } from 'react';

import { Fab, useModal } from '@core/uikit';

import { useLullaby } from '../../../../providers/LullabyProvider';
import { Volume } from '../Volume';

export const Settings: FC = () => {
  const { play } = useLullaby();

  const [, openVolumeSettings] = useModal({
    component: Volume,
    height: 'auto',
  });

  const handleOnSettingsClick = useCallback(() => {
    openVolumeSettings();
  }, [openVolumeSettings]);

  useLayoutEffect(() => play());

  return (
    <Fab edge placement={['end', 'top']} slot="fixed">
      <Fab.Button color="light" icon="settings" />
      <Fab.List side="bottom">
        <Fab.Button icon="music" />
        <Fab.Button icon="volume-2" onClick={handleOnSettingsClick} />
      </Fab.List>
    </Fab>
  );
};
