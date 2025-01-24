import { createElement, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { Color } from '@ionic/core';

import { TypographyVariant, TypographyWeight } from './Typography.types';
import { TYPOGRAPHY_TAG_MAPPING } from './Typography.const';

import styles from './Typography.module.scss';

export type TypographyProps = PropsWithChildren<{
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  className?: string;
  muted?: boolean;
  color?: Color;
}>;

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  muted,
  color,
  variant = 'body-1',
  weight = 'regular',
}) => {
  return createElement(
    TYPOGRAPHY_TAG_MAPPING[variant],
    {
      className: classNames(
        styles.default,
        styles[variant],
        styles[weight],
        styles[color],
        {
          [styles.muted]: muted,
        },
        className
      ),
    },
    children
  );
};
