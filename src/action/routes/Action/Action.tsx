import { memo } from 'react';

import { useRoute } from '@core/navigation';
import { AuthActionMode } from '@core/auth';

import { ResetPassword } from './_partitions/ResetPassword';
import { EmailVerification } from './_partitions/EmailVerification';
import { AuthActionRouteSearch } from './Action.types';

export const Action = memo(function Action() {
  const [
    {
      search: { mode, ...search },
    },
  ] = useRoute<{}, AuthActionRouteSearch>();

  if (mode === AuthActionMode.ResetPassword) {
    return <ResetPassword {...search} />;
  }

  if (mode === AuthActionMode.VerifyEmail) {
    return <EmailVerification {...search} />;
  }

  return null;
});
