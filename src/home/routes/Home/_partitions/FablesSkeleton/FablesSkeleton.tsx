import { memo } from 'react';
import { noop } from 'lodash';

import { Box } from '@core/uikit';

import { FableCard } from '../FableCard';

import { SKELETON_INITIAL_DATA } from './FablesSkeleton.const';

export const FablesSkeleton = memo(function FableSkeleton() {
  return (
    <Box flex={1}>
      {SKELETON_INITIAL_DATA.map((item, index) => {
        return <FableCard item={item} key={index} loading onClick={noop} />;
      })}
    </Box>
  );
});
