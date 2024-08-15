import { memo } from 'react';

import { Content, Header, Page } from '@core/uikit';

export const Legal = memo(function Legal() {
  return (
    <Page>
      <Header>
        <Header.Back />
      </Header>
      <Content>123</Content>
    </Page>
  );
});
