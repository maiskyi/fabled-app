import { createContext } from 'use-context-selector';

import { DevicePlatform } from './Device.types';

interface DeviceContextProps {
  width: number;
  height: number;
  platform: DevicePlatform;
  isDesktop: boolean;
  isMobile: boolean;
  identifier: string;
  isNativePlatform: boolean;
}

export const DeviceContext = createContext<DeviceContextProps>({
  height: window.innerHeight,
  identifier: null,
  isDesktop: false,
  isMobile: false,
  isNativePlatform: true,
  platform: 'ios',
  width: window.innerWidth,
});
