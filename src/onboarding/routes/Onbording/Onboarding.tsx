import { withLoad } from '@core/analytics';
import {
  Box,
  Content,
  Footer,
  Grid,
  Header,
  Page,
  SafeArea,
  Shade,
  Onboarding as Slides,
} from '@core/uikit';
import { useSettings } from '@bootstrap/providers';

import { OnboardingSlide } from './_partitions/OnboardingSlide';
import { useOnboarding } from './Onboarding.hooks';

export const Onboarding = withLoad({
  category: 'Onboarding',
  name: 'Onboarding',
})(() => {
  const { onboarding } = useOnboarding();
  const [, { setIsOnboarded }] = useSettings();

  const handleOnCompletedSkip = async () => {
    setIsOnboarded(true);
  };

  return (
    <Page>
      <Header transparent />
      <Content scrollY={false}>
        <SafeArea
          display="flex"
          flexDirection="column"
          height="100%"
          minHeight="100%"
          safe={['bottom']}
        >
          <Grid>
            <Grid.Row flex="1 0 auto">
              <Grid.Cell>
                <Box height="100%" minHeight="100%" position="relative">
                  <Shade top="calc(50% - 108px)" />
                  <Slides
                    onCompleted={handleOnCompletedSkip}
                    onSkip={handleOnCompletedSkip}
                  >
                    {onboarding.map((item) => {
                      return (
                        <Slides.Item key={item.description}>
                          <OnboardingSlide {...item} />
                        </Slides.Item>
                      );
                    })}
                  </Slides>
                </Box>
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </SafeArea>
      </Content>
      <Footer />
    </Page>
  );
});
