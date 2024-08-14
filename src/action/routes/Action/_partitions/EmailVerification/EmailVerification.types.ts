import { AuthActionMode, AuthQueryStatus } from '@core/auth';

export interface AuthActionRouteSearch {
  mode: AuthActionMode;
  oobCode: string;
  apiKey: string;
  lang: string;
}

export type ActionCopyMap = Record<AuthQueryStatus, string>;
