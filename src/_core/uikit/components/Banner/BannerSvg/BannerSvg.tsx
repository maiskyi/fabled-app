import { FC } from 'react';
import classNames from 'classnames';

import { Color } from '@ionic/core';

import { Box } from '../../Box';
import { SvgFunctionComponent } from '../../../types';

import styles from '../Banner.module.scss';

interface BannerSvgProps {
  color?: Color;
  Component: SvgFunctionComponent;
}

export const BannerSvg: FC<BannerSvgProps> = ({ Component, color }) => {
  return (
    <Box>
      <Box aspectRatio={1} width={200}>
        <Component
          className={classNames(styles.svg, styles.tertiary, styles[color])}
        />
      </Box>
    </Box>
  );
};
