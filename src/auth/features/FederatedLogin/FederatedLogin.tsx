import { memo } from 'react';

import { Box, Button } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useSignInWithGoogle } from '@core/auth';

export const FederatedLogin = memo(function FederatedLogin() {
  const { t } = useTranslation();

  const { isPending: isSigningInWithGoogle, mutate: signInWithGoogle } =
    useSignInWithGoogle();

  return (
    <Box padding={20} display="flex" flexDirection="column" gap={8}>
      <Button.Social
        name="google"
        expand="block"
        onClick={signInWithGoogle}
        loading={isSigningInWithGoogle}
      >
        {t('actions.continueWithGoogle')}
      </Button.Social>
      <Button.Social name="apple" expand="block">
        {t('actions.continueWithApple')}
      </Button.Social>
      <Button.Social name="facebook" expand="block">
        {t('actions.continueWithFacebook')}
      </Button.Social>
    </Box>
  );
});
