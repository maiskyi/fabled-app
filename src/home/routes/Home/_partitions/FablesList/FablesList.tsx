import { memo } from 'react';

import { Grid } from '@core/uikit';
import { DTO } from '@network/api';

import { FableCard } from '../FableCard';

interface FablesListProps {
  data: DTO.StoryItem[];
  onClick: (id: string) => void;
}

export const FablesList = memo<FablesListProps>(function FablesList({
  data,
  onClick,
}: FablesListProps) {
  return (
    <Grid.Row>
      {data.map((item) => {
        return (
          <Grid.Cell key={item.id} lg="6" md="6" sm="12" xl="4" xs="12">
            <FableCard item={item} onClick={() => onClick(item.id)} />
          </Grid.Cell>
        );
      })}
    </Grid.Row>
  );
});
