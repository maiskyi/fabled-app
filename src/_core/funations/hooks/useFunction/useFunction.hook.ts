import { useMemo, useRef } from 'react';

import { getFunctions, httpsCallable } from 'firebase/functions';
import { useMutation } from '@tanstack/react-query';

import { useFunctionsError } from '../useFunctionsError';

interface UseFunctionParams {
  name: string;
}

export const useFunction = <Request, Response>({ name }: UseFunctionParams) => {
  const { current: functions } = useRef(getFunctions());

  const { throwError } = useFunctionsError();

  const callable = useMemo(
    () => httpsCallable<Request, Response>(functions, name),
    [name, functions]
  );

  return useMutation<Response, Error, Request>({
    mutationKey: ['httpsCallable', name],
    mutationFn: async (request) => {
      try {
        const { data } = await callable(request);
        return data;
      } catch (err) {
        throwError(err);
      }
    },
  });
};
