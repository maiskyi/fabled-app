import { FC, useCallback, useLayoutEffect } from 'react';

import { Fab, useModal } from '@core/uikit';

import { useLullaby } from '../../../../providers/LullabyProvider';
import { VolumeModal } from '../VolumeModal';

export const Settings: FC = () => {
  const [{ volume }, { play, setVolume }] = useLullaby();

  const [, openVolumeSettings] = useModal({
    component: VolumeModal,
    height: 'auto',
  });

  const handleOnSettingsClick = useCallback(() => {
    openVolumeSettings({
      setVolume,
      volume,
    });
  }, [openVolumeSettings, setVolume, volume]);

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
