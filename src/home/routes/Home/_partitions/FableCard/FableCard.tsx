import { FC } from 'react';

import { Card, Image } from '@core/uikit';
import { DTO } from '@network/api';
import { useTranslation } from '@core/localization';

interface FableCardProps {
  loading?: boolean;
  onClick: () => void;
  item: DTO.StoryItem;
}

export const FableCard: FC<FableCardProps> = ({ item, loading, onClick }) => {
  const { t } = useTranslation();

  return (
    <Card loading={loading} onClick={onClick}>
      <Card.Thumb
        aspectRatio={4 / 3}
        subtitle={t('forms.readTimeMin', {
          min: item?.readTime,
        })}
        title={item.title}
      >
        <Image src={item?.image} />
      </Card.Thumb>
    </Card>
  );
};
