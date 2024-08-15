import { memo } from 'react';

import { Box, Button, useUtils } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useSignInWithGoogle, useSignInWithApple, AuthError } from '@core/auth';

export const FederatedLogin = memo(function FederatedLogin() {
  const { t } = useTranslation();
  const { toast } = useUtils();

  const { isPending: isSigningInWithGoogle, mutate: signInWithGoogle } =
    useSignInWithGoogle();

  const { isPending: isSigningInWithApple, mutate: signInWithApple } =
    useSignInWithApple();

  const signInErrorHandler = ({ title, message }: AuthError) => {
    toast({ message, title, variant: 'error' });
  };

  const handleOnSignInWithGoogle = () => {
    signInWithGoogle(undefined, {
      onError: (error) => signInErrorHandler(error),
    });
  };

  const handleOnSignInWithApple = () => {
    signInWithApple(undefined, {
      onError: (error) => signInErrorHandler(error),
    });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Button.Social
        expand="block"
        loading={isSigningInWithGoogle}
        name="google"
        onClick={handleOnSignInWithGoogle}
      >
        {t('actions.continueWithGoogle')}
      </Button.Social>
      <Button.Social
        expand="block"
        loading={isSigningInWithApple}
        name="apple"
        onClick={handleOnSignInWithApple}
      >
        {t('actions.continueWithApple')}
      </Button.Social>
      <Button.Social expand="block" name="facebook">
        {t('actions.continueWithFacebook')}
      </Button.Social>
    </Box>
  );
});
