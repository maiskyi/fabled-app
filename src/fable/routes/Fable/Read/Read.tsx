import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';

import { Box, Grid, Reader } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

import { FableContext } from '../Fable.context';

export const Read: FC = () => {
  const [, navigate] = useRoute();

  const story = useContextSelector(FableContext, ({ story }) => story);

  const handleOnCompleted = () => {
    navigate({
      action: 'back',
      pathname: RoutePath.Index,
    });
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Cell>
          <Box paddingInline={20}>
            <Reader onCompleted={handleOnCompleted}>{story?.content}</Reader>
          </Box>
        </Grid.Cell>
      </Grid.Row>
    </Grid>
  );
};
