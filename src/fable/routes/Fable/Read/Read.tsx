import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';

import { Box, Reader } from '@core/uikit';

import { FableContext } from '../Fable.context';

export const Read: FC = () => {
  const story = useContextSelector(FableContext, ({ story }) => story);

  return (
    <Box paddingInline={20}>
      <Reader>{story?.content}</Reader>
    </Box>
  );
};
