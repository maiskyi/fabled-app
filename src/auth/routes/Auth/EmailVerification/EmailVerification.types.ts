import { AuthActionMode, AuthQueryStatus } from '@core/auth';

export interface AuthActionRouteSearch {
  mode: AuthActionMode;
  oobCode: string;
  apiKey: string;
  lang: string;
}

export type ActionTitleStatusMap = Record<AuthQueryStatus, string>;

export type ActionTitleMap = Record<AuthActionMode, ActionTitleStatusMap>;

export type ActionMessageMap = Record<AuthActionMode, ActionTitleStatusMap>;
