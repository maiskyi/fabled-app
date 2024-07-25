import { memo } from 'react';

import { Page, Content, Header, Button } from '@core/uikit';
import { useGoogleSignIn } from '@core/auth';

export const Index = memo(function Index() {
  const [{ loading }, signInWithGoogle] = useGoogleSignIn();

  return (
    <Page>
      <Header />
      <Content>
        <Button.Social
          name="google"
          loading={loading}
          onClick={signInWithGoogle}
        >
          Continue with Google
        </Button.Social>
      </Content>
    </Page>
  );
});
