import { FC } from 'react';

import { Box, Grid, Reader, useInAppReview } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

import { useFable } from '../../../providers/FableProvider';

export const Read: FC = () => {
  const [, navigate] = useRoute();
  const [, inAppReview] = useInAppReview();
  const { story } = useFable();

  const handleOnCompleted = async () => {
    await inAppReview();
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
            <Reader content={story?.content} onCompleted={handleOnCompleted} />
          </Box>
        </Grid.Cell>
      </Grid.Row>
    </Grid>
  );
};
