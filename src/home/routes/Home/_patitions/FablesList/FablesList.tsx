import { memo } from 'react';

import { Box } from '@core/uikit';
import { DTO } from '@network/admin';

import { FableCard } from '../FableCard';

interface FablesListProps {
  data: DTO.GetUserStories['stories'];
  onClick: (id: string) => void;
}

export const FablesList = memo<FablesListProps>(function FablesList({
  data,
  onClick,
}: FablesListProps) {
  return (
    <Box flex={1}>
      {data.map((item) => {
        return (
          <FableCard
            item={item}
            key={item.id}
            onClick={() => onClick(item.id)}
          />
        );
      })}
    </Box>
  );
});
