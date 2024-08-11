import { FC } from 'react';

import { Card } from '@core/uikit';
import { DTO } from '@bootstrap/dto';
import { DocumentSnapshot } from '@core/firestore';
// import { ImageStorage } from '@core/storage';

interface FableCardProps {
  loading?: boolean;
  onClick: () => void;
  item: DocumentSnapshot<DTO.Fable>;
}

export const FableCard: FC<FableCardProps> = ({ item, loading, onClick }) => {
  return (
    <Card loading={loading} onClick={onClick}>
      <Card.Thumb>
        {/* <ImageStorage
          alt={item.data.response.title}
          filename={item.data.response.illustration}
        /> */}
      </Card.Thumb>
      <Card.Header>
        <Card.Title>{item.data.response.title}</Card.Title>
        <Card.Subtitle>
          Time to read: {item?.data.request.readTime} min
        </Card.Subtitle>
      </Card.Header>
    </Card>
  );
};
