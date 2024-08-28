import { memo } from 'react';

import { Animation, Message } from '@core/uikit';
import { useRoute } from '@core/navigation';

import { useThread } from './Details.hooks';
import { RouteParams } from './Details.types';

export const Details = memo(function Details() {
  const [{ params }] = useRoute<RouteParams>();

  const { thread } = useThread(params);

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
          </Animation.Message>
        );
      })}
    </>
  );
});
