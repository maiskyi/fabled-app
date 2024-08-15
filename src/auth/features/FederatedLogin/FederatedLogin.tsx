import { memo } from 'react';

import { Box, Button } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useSignInWithGoogle } from '@core/auth';

export const FederatedLogin = memo(function FederatedLogin() {
  const { t } = useTranslation();

  const { isPending: isSigningInWithGoogle, mutate: signInWithGoogle } =
    useSignInWithGoogle();

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
      <Button.Social expand="block" name="apple">
        {t('actions.continueWithApple')}
      </Button.Social>
      <Button.Social expand="block" name="facebook">
        {t('actions.continueWithFacebook')}
      </Button.Social>
    </Box>
  );
});
