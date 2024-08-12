export interface NavigateParamsBack {
  back: true;
}

export interface NavigateParamsPush {
  pathname: string;
  params?: object;
  search?: object;
}

export type NavigateParams = NavigateParamsBack | NavigateParamsPush;
