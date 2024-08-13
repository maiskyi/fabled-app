export interface NavigateParamsBack {
  action: 'back';
  pathname?: string;
}

export interface NavigateParamsPush {
  action: 'push';
  pathname: string;
  params?: object;
  search?: object;
}

export interface NavigateParamsReplace {
  action: 'replace';
  pathname: string;
  params?: object;
  search?: object;
}

export type NavigateParams =
  | NavigateParamsBack
  | NavigateParamsPush
  | NavigateParamsReplace;
