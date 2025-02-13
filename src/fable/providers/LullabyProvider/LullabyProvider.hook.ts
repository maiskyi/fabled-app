import { useContext } from 'use-context-selector';

import { LullabyContext } from './LullabyProvider.context';

export const useLullaby = () => useContext(LullabyContext);
