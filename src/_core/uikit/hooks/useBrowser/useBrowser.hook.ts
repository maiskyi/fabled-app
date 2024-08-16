import { useCallback } from 'react';

import { Browser } from '@capacitor/browser';

import { UseBrowserOpenParams } from './useBrowser.types';

export const useBrowser = () => {
  const open = useCallback(({ url }: UseBrowserOpenParams) => {
    return Browser.open({ presentationStyle: 'popover', url });
  }, []);

  return { open };
};
