import { useMediaSwitch } from '../../../useMediaSwitch';

import {
  ConfirmBreakpoints,
  ConfirmInitialBreakpoint,
  ConfirmClassName,
} from './useConfirmVariables.types';

import styles from '../../useUtils.module.scss';

export const useConfirmVariables = () => {
  const { value: breakpoints } = useMediaSwitch<ConfirmBreakpoints>({
    lg: undefined,
    md: undefined,
    sm: undefined,
    xl: undefined,
    xs: [0, 1],
  });

  const { value: initialBreakpoint } = useMediaSwitch<ConfirmInitialBreakpoint>(
    {
      lg: undefined,
      md: undefined,
      sm: undefined,
      xl: undefined,
      xs: 1,
    }
  );

  const { value: className } = useMediaSwitch<ConfirmClassName>({
    lg: styles.fixed,
    md: styles.fixed,
    sm: styles.fixed,
    xl: styles.fixed,
    xs: undefined,
  });

  return { breakpoints, className, initialBreakpoint };
};
