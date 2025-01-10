import { withLoad } from '@core/analytics';
import {
  Box,
  Content,
  Footer,
  Grid,
  Header,
  Page,
  SafeArea,
  Onboarding as Slides,
} from '@core/uikit';
import { Disclaimer } from '@common/features';
import { RoutePath } from '@bootstrap/constants';
import { useRoute } from '@core/navigation';
import { useSignInAnonymously } from '@core/auth';

import { OnboardingWelome } from './_partitions/OnboardingWelome';

export const Onboarding = withLoad({
  category: 'Onbording',
  name: 'Onbording',
})(() => {
  const [, navigate] = useRoute();

  const { mutateAsync } = useSignInAnonymously();

  const handleOnContactUs = () => {
    navigate({
      action: 'push',
      pathname: RoutePath.ContactUs,
    });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Actions>
          <Header.Action
            icons="help-buoy-outline"
            onClick={handleOnContactUs}
          />
        </Header.Actions>
      </Header>
      <Content>
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
                <Box height="100%" minHeight="100%" paddingInline={20}>
                  <Slides onCompleted={mutateAsync} onSkip={mutateAsync}>
                    <Slides.Item>
                      <OnboardingWelome />
                    </Slides.Item>
                    <Slides.Item>123</Slides.Item>
                    <Slides.Item>123</Slides.Item>
                  </Slides>
                </Box>
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </SafeArea>
      </Content>
      <Footer>
        <Box paddingInline={20} textAlign="center">
          <Disclaimer />
        </Box>
      </Footer>
    </Page>
  );
});
