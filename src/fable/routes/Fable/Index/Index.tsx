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
} from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';

import { FableContext } from '../Fable.context';

export const Index: FC = () => {
  const { t } = useTranslation();
  const { isLoading, isReady, story } = useContext(FableContext);

  return (
    <Page>
      <Header collapse="condense">
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>
        <Loading isOpen={isLoading && !isReady} />
        {isReady && (
          <SafeArea
            display="flex"
            flexDirection="column"
            height="100%"
            justifyContent="flex-end"
            safe={['bottom']}
          >
            <Box>
              <Card.Header>
                <Card.Title>{story?.title}</Card.Title>
              </Card.Header>
              <Box paddingInline={20}>
                <Button>{t('actions.readFable')}</Button>
              </Box>
            </Box>
          </SafeArea>
        )}
      </Content>
    </Page>
  );
};
