export interface NavigateParams {
  action: 'back' | 'push' | 'replace';
  pathname: string;
  params?: object;
  search?: object;
}
