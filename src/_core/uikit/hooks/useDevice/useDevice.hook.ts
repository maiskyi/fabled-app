import { useContext } from 'use-context-selector';

import { DeviceContext } from '../../contexts/DeviceContext';

export const useDevice = () => useContext(DeviceContext);
