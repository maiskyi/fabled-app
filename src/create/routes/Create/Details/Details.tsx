import { memo, useCallback } from 'react';

import { Animation, Box, Button, Message } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

import { useThread } from './Details.hooks';
import { RouteParams } from './Details.types';

export const Details = memo(function Details() {
  const [{ params }, navigate] = useRoute<RouteParams>();

  const onRead = useCallback(() => {
    navigate({ action: 'replace', params, pathname: RoutePath.Fable });
  }, [navigate, params]);

  const { thread } = useThread({
    onRead,
    ...params,
  });

  return (
    <>
      {thread.map((item) => {
        return (
          <Animation.Message key={item.id}>
            {item.type === 'message' && (
              <Message
                avatar={item.props.avatar}
                origin={item.props.origin}
                title={item.props.title}
              >
                {item.props.children}
              </Message>
            )}
            {item.type === 'actions' && (
              <Box display="flex" justifyContent="flex-end" paddingInline={20}>
                {item.props.map((props, index) => {
                  return <Button key={index} {...props} />;
                })}
              </Box>
            )}
          </Animation.Message>
        );
      })}
    </>
  );
});
