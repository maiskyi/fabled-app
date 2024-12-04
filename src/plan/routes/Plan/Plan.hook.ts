import { PlanAction } from '@bootstrap/constants';
import { usePurchases } from '@core/purchases';

import { PlanFrom, PlanFromField } from './Plan.types';

interface UsePlanParams {
  action: PlanAction;
}

export const usePlanDefaultValues = ({ action }: UsePlanParams) => {
  const { offering, activeSubscriptions } = usePurchases();

  if (action === PlanAction.Subscribe) {
    const defaultValues: PlanFrom = {
      [PlanFromField.Product]: offering?.availablePackages.at(0)?.identifier,
    };
    return { defaultValues };
  } else {
    const defaultValues: PlanFrom = {
      [PlanFromField.Product]: activeSubscriptions[0]?.identifier,
    };
    return { defaultValues };
  }
};
