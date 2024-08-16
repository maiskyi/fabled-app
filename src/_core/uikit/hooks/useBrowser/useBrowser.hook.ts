import { Browser } from '@capacitor/browser';

export const useBrowser = () => {
  return { open: Browser.open };
};
