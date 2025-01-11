import { FunctionComponent, SVGProps } from 'react';

export type SvgFunctionComponent = FunctionComponent<
  SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    className?: string;
  }
>;
