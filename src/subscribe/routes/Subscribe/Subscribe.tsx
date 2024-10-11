import { FC } from 'react';

import { Box, Content, Header, Page, Text } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { usePurchases } from '@core/purchases';
import { useTranslation } from '@core/localization';

import { PackageCard } from './_partitions/PackageCard';

export const Subscribe: FC = () => {
  const { t } = useTranslation();
  const { offering } = usePurchases();

  const title = t('pages.subscribe');

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large" wrap>
            {title}
          </Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{t('intro.subscribe')}</Text>
        </Box>
        {offering.availablePackages.map((item) => {
          return <PackageCard key={item.identifier} {...item} />;
        })}
      </Content>
    </Page>
  );
};
