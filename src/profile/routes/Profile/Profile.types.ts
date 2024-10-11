import { IconName } from '@core/uikit';

export interface ProfileMenuItem {
  group: string;
  label: string;
  note?: string;
  onClick?: () => void;
  icon: IconName;
  active: boolean;
}
