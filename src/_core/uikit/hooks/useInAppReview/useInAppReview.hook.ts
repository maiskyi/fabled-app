import { useAsyncFn } from 'react-use';

import { InAppReview } from '@capacitor-community/in-app-review';

export const useInAppReview = () => {
  return useAsyncFn(async () => {
    await InAppReview.requestReview();
    return true;
  });
};
