import { FC } from 'react';

import {
  Card,
  // useDevice
} from '@core/uikit';
// import { CloudinaryImage } from '@network/cloudinary';
import { DTO } from '@network/api';

interface FableCardProps {
  loading?: boolean;
  onClick: () => void;
  item: DTO.GetUserStories['stories']['0'];
}

export const FableCard: FC<FableCardProps> = ({ item, loading, onClick }) => {
  // const { width } = useDevice();

  return (
    <Card loading={loading} onClick={onClick}>
      <Card.Thumb aspectRatio={4 / 3}>
        {/* <CloudinaryImage
          aspectRatio="4:3"
          crop="thumb"
          gravity="custom:faces"
          publicId={item?.image?.public_id}
          width={width}
        /> */}
      </Card.Thumb>
      <Card.Header>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle>Time to read: {item?.readTime} min</Card.Subtitle>
      </Card.Header>
    </Card>
  );
};
