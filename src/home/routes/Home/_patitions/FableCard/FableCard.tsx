import { FC } from 'react';

import { Card } from '@core/uikit';
import { DTO } from '@network/api';

interface FableCardProps {
  loading?: boolean;
  onClick: () => void;
  item: DTO.GetUserStories['stories']['0'];
}

export const FableCard: FC<FableCardProps> = ({ item, loading, onClick }) => {
  return (
    <Card loading={loading} onClick={onClick}>
      <Card.Thumb aspectRatio={4 / 3}>
        <img alt={item?.title} src={item?.image?.publicUrlTransformed} />
      </Card.Thumb>
      <Card.Header>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle>Time to read: {item?.readTime} min</Card.Subtitle>
      </Card.Header>
    </Card>
  );
};
