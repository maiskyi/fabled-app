import { FC } from 'react';

import { Card, Spinner, useDevice } from '@core/uikit';
import { DTO } from '@network/api';
import { Image } from '@core/cloudinary';

interface FableCardProps {
  loading?: boolean;
  onClick: () => void;
  item: DTO.StoriesItem;
}

export const FableCard: FC<FableCardProps> = ({ item, loading, onClick }) => {
  const { width } = useDevice();

  return (
    <Card loading={loading} onClick={onClick}>
      <Card.Thumb aspectRatio={4 / 3}>
        <Image
          aspectRatio="4:3"
          crop="thumb"
          id={item?.image?.publicId}
          spinner={<Spinner />}
          width={width}
        />
      </Card.Thumb>
      <Card.Header>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle>Time to read: {item?.readTime} min</Card.Subtitle>
      </Card.Header>
    </Card>
  );
};
