import { memo } from 'react';

import {
  Box,
  Button,
  Card,
  Content,
  Footer,
  Header,
  Page,
  Swiper,
} from '@core/uikit';
import { useRoute } from '@core/navigation';
import { RoutePath } from '@bootstrap/constants';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

import styles from './Character.module.scss';

const slides = Array.from({ length: 10 }).map(() => ({
  id: faker.string.uuid(),
  title: faker.person.fullName(),
}));

export const Character = memo(function Character() {
  const [, navigate] = useRoute();

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>
        <Box display="flex" flexDirection="column" minHeight="100%">
          <Box flex={0}>
            <Header collapse="condense">
              <Header.Title size="large">Title</Header.Title>
            </Header>
          </Box>
          <Box alignItems="center" display="flex" flex={1}>
            <Swiper>
              {slides.map(({ id, title }) => {
                return (
                  <Swiper.Slide className={styles.slide} key={id}>
                    <Card>
                      <Card.Thumb aspectRatio="9 / 12">
                        <Card.Header>
                          <Card.Title>{title}</Card.Title>
                        </Card.Header>
                      </Card.Thumb>
                    </Card>
                    {/* <Box aspectRatio="9 / 16">{title}</Box> */}
                  </Swiper.Slide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
      </Content>
      <Footer>
        <Button
          onClick={() =>
            navigate({ action: 'push', pathname: RoutePath.CreateScene })
          }
        >
          Next
        </Button>
      </Footer>
    </Page>
  );
});
