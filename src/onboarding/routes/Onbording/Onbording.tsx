import { withLoad } from '@core/analytics';
import { Content, Grid, Header, Page, SafeArea } from '@core/uikit';
import { Disclaimer } from '@common/features';

export const Onbording = withLoad({
  category: 'Onbording',
  name: 'Onbording',
})(() => {
  return (
    <Page>
      <Header collapse="condense" />
      <Content>
        <SafeArea
          display="flex"
          flexDirection="column"
          minHeight="100%"
          safe={['bottom']}
        >
          <Grid>
            <Grid.Row flex="0 0 auto">
              <Grid.Cell>
                <Header></Header>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row flex="1 0 auto">
              <Grid.Cell></Grid.Cell>
            </Grid.Row>
            <Grid.Row flex="0 0 auto" paddingInline={20} textAlign="center">
              <Grid.Cell>
                <Disclaimer />
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </SafeArea>
      </Content>
    </Page>
  );
});
