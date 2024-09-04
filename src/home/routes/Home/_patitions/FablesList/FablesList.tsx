import { memo } from 'react';

import { Box } from '@core/uikit';
import { DocumentSnapshot } from '@core/firestore';
import { DTO } from '@bootstrap/dto';

import { FableCard } from '../FableCard';

interface FablesListProps {
  data: DocumentSnapshot<DTO.Fable>[];
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
            item={item.data}
            key={item.id}
            onClick={() => onClick(item.id)}
          />
        );
      })}
    </Box>
  );
});
