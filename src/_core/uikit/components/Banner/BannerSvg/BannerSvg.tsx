import { FC } from 'react';
import classNames from 'classnames';

import { Color } from '@ionic/core';

import { Box } from '../../Box';
import { SvgFunctionComponent } from '../../../types';
import { useMediaSwitch } from '../../../hooks/useMediaSwitch';

import styles from '../Banner.module.scss';

interface BannerSvgProps {
  color?: Color;
  Component: SvgFunctionComponent;
}

export const BannerSvg: FC<BannerSvgProps> = ({ Component, color }) => {
  const { value: width } = useMediaSwitch({
    md: 300,
    sm: 200,
    xs: 200,
  });

  return (
    <Box>
      <Box aspectRatio={1} width={width}>
        <Component
          className={classNames(styles.svg, styles.tertiary, styles[color])}
        />
      </Box>
    </Box>
  );
};
