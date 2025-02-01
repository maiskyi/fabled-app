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
import { Disclaimer } from '@common/features';
import { useSignInAnonymously } from '@core/auth';

import { OnboardingSlide } from './_partitions/OnboardingSlide';
import { useOnboarding } from './Onboarding.hooks';

export const Onboarding = withLoad({
  category: 'Onbording',
  name: 'Onbording',
})(() => {
  const { onboarding } = useOnboarding();

  const { mutateAsync } = useSignInAnonymously();

  const handleOnCompletedSkip = async () => {
    await mutateAsync();
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
                  <Shade top="calc(50% - 122px)" />
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
      <Footer>
        <Box textAlign="center">
          <Disclaimer />
        </Box>
      </Footer>
    </Page>
  );
});
