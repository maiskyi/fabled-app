import { FC, useCallback, useLayoutEffect, useRef } from 'react';
import { noop } from 'lodash';

import { Animation, Box, Button, Grid, Message, SafeArea } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
import { withLoad } from '@core/analytics';

import { useThread } from './Details.hooks';
import { RouteParams } from './Details.types';

interface DetailsProps {
  onMessage?: () => void;
}

export const Details: FC<DetailsProps> = withLoad({
  category: 'Fable',
  name: 'Create Fable Details',
})(function Details({ onMessage = noop }) {
  const [{ params }, navigate] = useRoute<RouteParams>();
  const ref = useRef<HTMLDivElement>();

  const onReadNow = useCallback(() => {
    navigate({ action: 'replace', params, pathname: RoutePath.Fable });
  }, [navigate, params]);

  const onCancel = useCallback(() => {
    navigate({ action: 'back', pathname: RoutePath.Index });
  }, [navigate]);

  const { thread } = useThread({
    onCancel,
    onReadNow,
    ...params,
  });

  useLayoutEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(onMessage);
      observer.observe(ref.current, {
        childList: true,
      });
      return () => observer.disconnect();
    }
  }, [onMessage]);

  return (
    <Grid.Row>
      <Grid.Cell>
        <SafeArea ref={ref} safe={['bottom']}>
          {thread.map((item) => {
            return (
              <Animation.Message key={item.id}>
                {item.type === 'message' && (
                  <Message {...item.props}>{item.props.children}</Message>
                )}
                {item.type === 'actions' && (
                  <Box
                    display="flex"
                    gap={8}
                    justifyContent="flex-end"
                    marginBottom={10}
                    marginTop={10}
                    paddingInline={20}
                  >
                    {item.props.map((props, index) => {
                      return <Button key={index} {...props} />;
                    })}
                  </Box>
                )}
              </Animation.Message>
            );
          })}
        </SafeArea>
      </Grid.Cell>
    </Grid.Row>
  );
});
