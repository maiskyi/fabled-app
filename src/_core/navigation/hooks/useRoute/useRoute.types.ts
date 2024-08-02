export interface NavigateParamsBack {
  back: true;
}

export interface NavigateParamsPush {
  pathname: string;
}

export type NavigateParams = NavigateParamsBack | NavigateParamsPush;
