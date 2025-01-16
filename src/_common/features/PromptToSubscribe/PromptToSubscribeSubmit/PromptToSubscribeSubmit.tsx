import { FC } from 'react';
import { get } from 'lodash';

import { Form, useFormControl } from '@core/uikit';
import { useTranslation } from '@core/localization';
import {
  IntroEligibility,
  PurchasesPackage,
  INTRO_ELIGIBILITY_STATUS,
} from '@core/purchases';

import { PlanFromField } from '../PromptToSubscribe.types';

interface PromptToSubscribeSubmitProps {
  introEligibility: Record<string, IntroEligibility>;
  packages: PurchasesPackage[];
}

export const PromptToSubscribeSubmit: FC<PromptToSubscribeSubmitProps> = ({
  introEligibility,
  packages,
}) => {
  const { t } = useTranslation();

  const [value] = useFormControl<string>({
    name: PlanFromField.Product,
  });

  const hasTrial =
    get(introEligibility, [value, 'status']) ===
    INTRO_ELIGIBILITY_STATUS.INTRO_ELIGIBILITY_STATUS_ELIGIBLE;

  const days = packages.find(({ product }) => product.identifier === value)
    ?.product?.introPrice?.periodNumberOfUnits;

  return (
    <Form.Submit color="dark">
      {hasTrial ? t('actions.startYourTrial', { days }) : t('actions.continue')}
    </Form.Submit>
  );
};
