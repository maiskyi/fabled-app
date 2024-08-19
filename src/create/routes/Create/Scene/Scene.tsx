import { memo } from 'react';

import { Button, Content, Header, Page } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

export const Scene = memo(function Character() {
  const [, navigate] = useRoute();

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>
        <Button
          onClick={() =>
            navigate({ action: 'push', pathname: RoutePath.CreateScene })
          }
        >
          Scene
        </Button>
      </Content>
    </Page>
  );
});
