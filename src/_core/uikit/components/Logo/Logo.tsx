import { FC } from 'react';

import SRC from '../../assets/images/logo.png';

export interface LogoProps {
  height?: number;
}

export const Logo: FC<LogoProps> = ({ height }) => {
  return <img alt="" src={SRC} style={{ height }} />;
};
