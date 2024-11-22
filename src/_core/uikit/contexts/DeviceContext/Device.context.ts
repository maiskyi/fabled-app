import { createContext } from 'use-context-selector';

import { DevicePlatform } from './Device.types';

interface DeviceContextProps {
  width: number;
  height: number;
  platform: DevicePlatform;
}

export const DeviceContext = createContext<DeviceContextProps>({
  height: window.innerHeight,
  platform: 'ios',
  width: window.innerWidth,
});
