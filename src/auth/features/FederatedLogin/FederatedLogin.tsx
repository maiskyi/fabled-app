import { memo } from 'react';

import { Box, Button } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useSignInWithGoogle, useSignInWithApple } from '@core/auth';

export const FederatedLogin = memo(function FederatedLogin() {
  const { t } = useTranslation();

  const { isPending: isSigningInWithGoogle, mutate: signInWithGoogle } =
    useSignInWithGoogle();

  const { isPending: isSigningInWithApple, mutate: signInWithApple } =
    useSignInWithApple();

  return (
    <Box display="flex" flexDirection="column">
      <Button.Social
        expand="block"
        loading={isSigningInWithGoogle}
        name="google"
        onClick={signInWithGoogle}
      >
        {t('actions.continueWithGoogle')}
      </Button.Social>
      <Button.Social
        expand="block"
        loading={isSigningInWithApple}
        name="apple"
        onClick={signInWithApple}
      >
        {t('actions.continueWithApple')}
      </Button.Social>
      <Button.Social expand="block" name="facebook">
        {t('actions.continueWithFacebook')}
      </Button.Social>
    </Box>
  );
});
