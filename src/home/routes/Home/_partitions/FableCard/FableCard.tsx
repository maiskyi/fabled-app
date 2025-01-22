import { FC } from 'react';

import { Tile } from '@core/uikit';
import { DTO } from '@network/api';
import { useTranslation } from '@core/localization';

interface FableCardProps {
  loading?: boolean;
  onClick: () => void;
  item: DTO.StoryItem;
}

export const FableCard: FC<FableCardProps> = ({ item, onClick }) => {
  const { t } = useTranslation();

  return (
    <Tile aspectRatio={4 / 3} onClick={onClick} src={item?.image}>
      <Tile.Header>
        <Tile.Subtitle>
          {t('forms.readTimeMin', {
            min: item?.readTime,
          })}
        </Tile.Subtitle>
        <Tile.Title>{item.title}</Tile.Title>
      </Tile.Header>
    </Tile>
  );
};
