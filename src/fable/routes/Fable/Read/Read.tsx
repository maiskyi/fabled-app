import { FC, Fragment, useLayoutEffect } from 'react';

import { Box, Grid, Reader, useInAppReview } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';

import { useFable } from '../../../providers/FableProvider';
import { Lullaby } from '../_patitions/Lullaby';
import { LullabyModal } from '../_patitions/LullabyModal';
import { useLullaby } from '../../../providers/LullabyProvider';

export const Read: FC = () => {
  const [, navigate] = useRoute();
  const [, inAppReview] = useInAppReview();
  const { story } = useFable();
  const [, { play }] = useLullaby();

  const handleOnCompleted = async () => {
    await inAppReview();
    navigate({
      action: 'back',
      pathname: RoutePath.Index,
    });
  };

  useLayoutEffect(() => play());

  return (
    <Fragment>
      <LullabyModal />
      <Grid>
        <Grid.Row>
          <Grid.Cell>
            <Box paddingInline={20}>
              <Reader content={story?.content} onCompleted={handleOnCompleted}>
                <Lullaby />
              </Reader>
            </Box>
          </Grid.Cell>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};
