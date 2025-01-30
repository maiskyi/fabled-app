import { memo } from 'react';

import { Translate } from '@core/localization';
import { LinkVoid } from '@core/navigation';
import { Typography } from '@core/uikit';

import { useLegal } from '../../hooks';

import styles from './Disclaimer.module.scss';

export const Disclaimer = memo(function Disclaimer() {
  const { openPrivacyPolicy, openTermsAndConditions } = useLegal();

  return (
    <Typography variant="body-3">
      <Translate
        components={{
          privacy: (
            <LinkVoid className={styles.link} onClick={openPrivacyPolicy} />
          ),
          terms: (
            <LinkVoid
              className={styles.link}
              onClick={openTermsAndConditions}
            />
          ),
        }}
        id="copy.agreeToTermsAndPolicy"
      />
    </Typography>
  );
});
