import { FunctionComponent, SVGProps } from 'react';

export type OnboardingItemImage = FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    className?: string;
  }
>;

export interface OnboardingItem {
  title: string;
  description: string;
  image: OnboardingItemImage;
}
