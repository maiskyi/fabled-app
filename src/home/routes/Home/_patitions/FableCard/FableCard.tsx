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
        <ImageStorage
          alt={item.data.response.title}
          filename={item.data.response.illustration}
        />
      </Card.Thumb>
      <Card.Header>
        <Card.Subtitle>{item?.id}</Card.Subtitle>
        <Card.Title>{item.data.response.title}</Card.Title>
      </Card.Header>
    </Card>
  );
};
