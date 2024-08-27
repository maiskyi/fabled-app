import { useCallback } from 'react';

import { render as mRender, Scope } from 'micromustache';

export const useTemplate = () => {
  const render = useCallback((template: string, scope: Scope) => {
    return mRender(template, scope, {}).replace(/<\/?[^>]+(>|$)/g, '');
  }, []);

  return { render };
};
