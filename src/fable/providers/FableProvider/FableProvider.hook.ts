import { useContext } from 'use-context-selector';

import { FableContext } from './FableProvider.context';

export const useFable = () => useContext(FableContext);
