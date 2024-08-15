import { memo } from 'react';

import { Box, Button, useUtils } from '@core/uikit';
import { useTranslation } from '@core/localization';
import {
  useSignInWithGoogle,
  useSignInWithApple,
  useSignInWithFacebook,
  AuthError,
} from '@core/auth';

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

  const { isPending: isSigningInWithFacebook, mutate: signInWithFacebook } =
    useSignInWithFacebook();

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

  const handleOnSignInWithFacebook = () => {
    signInWithFacebook(undefined, {
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
      <Button.Social
        expand="block"
        loading={isSigningInWithFacebook}
        name="facebook"
        onClick={handleOnSignInWithFacebook}
      >
        {t('actions.continueWithFacebook')}
      </Button.Social>
    </Box>
  );
});
