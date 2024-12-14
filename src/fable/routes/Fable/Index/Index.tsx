import { FC } from 'react';
import { useContext } from 'use-context-selector';

import { Box, Button, Text, Chip } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';

import { FableContext } from '../Fable.context';

export const Index: FC = () => {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const { story } = useContext(FableContext);

  const description = story?.content.split('\n')[0].trim();

  const chips = [
    story?.character,
    story?.placeOfEvent,
    story?.moralLesson,
  ].filter((v) => !!v);

  const handleOnRead = () => {
    navigate({
      action: 'replace',
      params: { id: story?.id },
      pathname: RoutePath.FableRead,
    });
  };

  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Box display="flex" flexDirection="column" gap={8}>
        <Box
          display="flex"
          flexWrap="nowrap"
          gap={4}
          overflow="auto"
          paddingInline={20}
        >
          {chips.map(({ id, title, emoji }) => {
            return (
              <Chip emoji={emoji} key={id}>
                {title}
              </Chip>
            );
          })}
        </Box>
        <Box paddingInline={20}>
          <Text truncate={5}>{description}</Text>
        </Box>
      </Box>
      <Box paddingInline={20}>
        <Button onClick={handleOnRead}>{t('actions.readFable')}</Button>
      </Box>
    </Box>
  );
};
