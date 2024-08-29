import { createContext } from 'use-context-selector';

interface DeviceContextProps {
  width: number;
  height: number;
}

export const DeviceContext = createContext<DeviceContextProps>({
  height: window.innerHeight,
  width: window.innerWidth,
});
