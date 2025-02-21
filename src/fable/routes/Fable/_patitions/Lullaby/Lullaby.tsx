import { FC } from 'react';

import { Fab } from '@core/uikit';

import { Setting } from '../../Fable.types';

export const Lullaby: FC = () => {
  return <Fab.Button color="light" icon="music" id={Setting.Lullaby} />;
};
