import { FC } from 'react';

import { Form } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { IntroEligibility } from '@core/purchases';

interface PromptToSubscribeSubmitProps {
  introEligibility: Record<string, IntroEligibility>;
}

export const PromptToSubscribeSubmit: FC<PromptToSubscribeSubmitProps> = () => {
  const { t } = useTranslation();

  return <Form.Submit color="dark">{t('actions.continue')}</Form.Submit>;
};
