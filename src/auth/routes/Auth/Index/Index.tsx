import { memo } from 'react';

import { Page, Content, Header, Button } from '@core/uikit';

export const Index = memo(function Index() {
  return (
    <Page>
      <Header />
      <Content>
        <Button.Social name="google">Continue with Google</Button.Social>
      </Content>
    </Page>
  );
});
