import { createElement, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { TypographyVariant, TypographyWeight } from './Typography.types';
import { TYPOGRAPHY_TAG_MAPPING } from './Typography.const';

import styles from './Typography.module.scss';

export type TypographyProps = PropsWithChildren<{
  variant?: TypographyVariant;
  weight?: TypographyWeight;
}>;

export const Typography: FC<TypographyProps> = ({
  children,
  variant = 'body-1',
  weight = 'regular',
}) => {
  const className = classNames(styles[variant], styles[weight]);

  return createElement(
    TYPOGRAPHY_TAG_MAPPING[variant],
    { className },
    children
  );
};
