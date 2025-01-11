import { CSSProperties, FC } from 'react';

import { Color } from '@ionic/core';

import { SvgFunctionComponent } from '../../../../types';

import styles from './OnboardingItemSvg.module.scss';

interface OnboardingItemSvgProps {
  Svg: SvgFunctionComponent;
  color?: Color;
  height?: CSSProperties['width'];
  width?: CSSProperties['height'];
}

export const OnboardingItemSvg: FC<OnboardingItemSvgProps> = ({
  Svg,
  width,
  height,
  color = 'tertiary',
}) => {
  return <Svg className={styles[color]} style={{ height, width }} />;
};
