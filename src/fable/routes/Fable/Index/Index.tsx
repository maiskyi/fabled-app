import { FC } from 'react';
import { useContext } from 'use-context-selector';

import {
  Content,
  Header,
  Page,
  Loading,
  Box,
  Button,
  SafeArea,
  Card,
  Text,
  Chip,
} from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { useRoute } from '@core/navigation';

import { FableContext } from '../Fable.context';

export const Index: FC = () => {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const { isReady, story } = useContext(FableContext);

  const cover = isReady ? story?.image : undefined;

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
    <Page cover={cover}>
      <Content>
        <Box display="flex" flexDirection="column" height="100%">
          <Box
            background="linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent)"
            flex="0 0 auto"
            paddingBottom={24}
          >
            <Header collapse="condense">
              <Header.Back color="dark" pathname={RoutePath.Index} />
            </Header>
          </Box>
          <Box
            display="flex"
            flex="1 1 auto"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Loading isOpen={!isReady} />
            {isReady && (
              <SafeArea
                background="linear-gradient(to top, rgba(0, 0, 0, 1), transparent)"
                display="flex"
                flex="0 0 70%"
                flexDirection="column"
                justifyContent="flex-end"
                safe={['bottom']}
              >
                <Box>
                  <Card.Header>
                    <Card.Title>{story?.title}</Card.Title>
                  </Card.Header>
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
                      <Button onClick={handleOnRead}>
                        {t('actions.readFable')}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </SafeArea>
            )}
          </Box>
        </Box>
      </Content>
    </Page>
  );
};
