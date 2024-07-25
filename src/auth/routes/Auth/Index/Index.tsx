import { memo } from 'react';

import { Page, Content, Header } from '@core/uikit';

export const Index = memo(() => {
  return (
    <Page>
      <Header />
      <Content>123</Content>
    </Page>
  );
});

Index.displayName = 'Index';
