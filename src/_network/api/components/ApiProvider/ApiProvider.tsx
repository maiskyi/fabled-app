import { FC, PropsWithChildren, useRef } from 'react';
import axios from 'axios';
import { stringify } from 'qs';

import { ApiContext } from '../../contexts/ApiContext';

export type ApiProviderProps = PropsWithChildren<{
  endpoint: string;
}>;

export const ApiProvider: FC<ApiProviderProps> = ({ children, endpoint }) => {
  const { current: instance } = useRef(
    axios.create({
      baseURL: endpoint,
      paramsSerializer: (params) => stringify(params, { indices: false }),
      timeout: 30000,
    })
  );
  return (
    <ApiContext.Provider value={{ instance }}>{children}</ApiContext.Provider>
  );
};
