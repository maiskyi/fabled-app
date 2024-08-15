import { AuthActionMode } from '@core/auth';

export interface AuthActionRouteSearch {
  mode: AuthActionMode;
  oobCode: string;
  apiKey: string;
  lang: string;
}

export type AuthActionModeProps = Omit<AuthActionRouteSearch, 'mode'>;
