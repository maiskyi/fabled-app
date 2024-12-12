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
import { useRoute } from '@core/navigation';

import { FableContext } from '../Fable.context';

export const Read: FC = () => {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const { isLoading, isReady, story } = useContext(FableContext);

  return (
    <Page>
      <Header collapse="condense">
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>123</Content>
    </Page>
  );
};
