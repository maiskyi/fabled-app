import { IconName } from '@core/uikit';

export interface ProfileMenuItem {
  group: string;
  label: string;
  onClick: () => void;
  icon: IconName;
  active: boolean;
}
