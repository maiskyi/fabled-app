import { useCallback } from 'react';

import { useBrowser } from '@core/uikit';
import { useConfig } from '@bootstrap/providers';

export const useLegal = () => {
  const { privacyPolicyUrl, termsAndConditionsUrl } = useConfig();
  const { open } = useBrowser();

  const openPrivacyPolicy = useCallback(async () => {
    await open({
      url: privacyPolicyUrl,
    });
  }, [privacyPolicyUrl, open]);

  const openTermsAndConditions = useCallback(async () => {
    await open({
      url: termsAndConditionsUrl,
    });
  }, [open, termsAndConditionsUrl]);

  return { openPrivacyPolicy, openTermsAndConditions };
};
