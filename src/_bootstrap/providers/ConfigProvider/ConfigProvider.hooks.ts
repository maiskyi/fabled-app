import { useContext } from 'use-context-selector';

import { ConfigContext } from './ConfigProvider.context';

export const useConfig = () => useContext(ConfigContext);
