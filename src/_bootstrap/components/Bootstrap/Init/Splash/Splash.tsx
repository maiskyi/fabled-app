import { FC } from 'react';

import { Page, Loading } from '@core/uikit';
import { useTranslation } from '@core/localization';

export const Splash: FC = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Loading isOpen message={t('feedback.loading')} />
    </Page>
  );
};
