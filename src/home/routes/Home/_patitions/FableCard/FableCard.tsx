import { FC } from 'react';

import { Card } from '@core/uikit';
import { DTO } from '@bootstrap/dto';
import { DocumentSnapshot } from '@core/firestore';
import { ImageStorage } from '@core/storage';

interface FableCardProps {
  item: DocumentSnapshot<DTO.Fable>;
}

export const FableCard: FC<FableCardProps> = ({ item }) => {
  return (
    <Card>
      <Card.Thumb>
        <ImageStorage filename={item.data.response.illustration} />
      </Card.Thumb>
      <Card.Header>
        <Card.Subtitle>{item?.id}</Card.Subtitle>
      </Card.Header>
    </Card>
  );
};
