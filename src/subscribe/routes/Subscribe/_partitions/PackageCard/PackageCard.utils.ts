import { ceil } from 'lodash';

export const calcDiscount = (
  hightestMonthlyPrice: number,
  pricePerMonth: number
) => {
  return ceil((1 - pricePerMonth / hightestMonthlyPrice) * 100);
};
