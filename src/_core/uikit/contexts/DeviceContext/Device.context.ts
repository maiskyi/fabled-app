import { createContext } from 'use-context-selector';

import { DevicePlatform } from './Device.types';

interface DeviceContextProps {
  width: number;
  height: number;
  platform: DevicePlatform;
  isDesktop: boolean;
}

export const DeviceContext = createContext<DeviceContextProps>({
  height: window.innerHeight,
  isDesktop: false,
  platform: 'ios',
  width: window.innerWidth,
});
