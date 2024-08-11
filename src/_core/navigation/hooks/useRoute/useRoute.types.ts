export interface NavigateParamsBack {
  back: true;
}

export interface NavigateParamsPush {
  pathname: string;
  params?: object;
}

export type NavigateParams = NavigateParamsBack | NavigateParamsPush;
