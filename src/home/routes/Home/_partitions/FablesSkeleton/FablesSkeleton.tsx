import { memo } from 'react';
import { noop } from 'lodash';

import { Grid } from '@core/uikit';

import { FableCard } from '../FableCard';

import { SKELETON_INITIAL_DATA } from './FablesSkeleton.const';

export const FablesSkeleton = memo(function FableSkeleton() {
  return (
    <Grid.Row>
      {SKELETON_INITIAL_DATA.map((item, index) => {
        return (
          <Grid.Cell key={index} lg="6" md="6" sm="12" xl="4" xs="12">
            <FableCard item={item} loading onClick={noop} />
          </Grid.Cell>
        );
      })}
    </Grid.Row>
  );
});
