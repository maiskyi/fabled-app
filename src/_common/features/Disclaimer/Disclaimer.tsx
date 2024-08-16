import { memo } from 'react';

import { Translate } from '@core/localization';
import { LinkVoid } from '@core/navigation';
import { Text } from '@core/uikit';

import { useLegal } from '../../hooks';

export const Disclaimer = memo(function Disclaimer() {
  const { openPrivacyPolicy, openTermsAndConditions } = useLegal();

  return (
    <Text>
      <Translate
        components={{
          privacy: <LinkVoid onClick={openPrivacyPolicy} />,
          terms: <LinkVoid onClick={openTermsAndConditions} />,
        }}
        id="copy.agreeToTermsAndPolicy"
      />
    </Text>
  );
});
