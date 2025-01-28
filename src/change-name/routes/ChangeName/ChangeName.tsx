import {
  Box,
  Content,
  Footer,
  Form,
  Grid,
  Header,
  Page,
  Typography,
} from '@core/uikit';
import { NotificationType, RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { useUpdateProfile, UpdateProfileRequest, useAuth } from '@core/auth';
import { useRoute } from '@core/navigation';
import { withLoad } from '@core/analytics';

export const ChangeName = withLoad({
  category: 'Profile',
  name: 'Change Name',
})(function ChangeName() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [, navigate] = useRoute();

  const title = t('pages.changeName');

  const { isPending, mutate } = useUpdateProfile();

  const handleOnSubmit = (data: UpdateProfileRequest) => {
    mutate(data, {
      onSuccess: () => {
        navigate({
          action: 'replace',
          params: { type: NotificationType.UpdateProfileSucceed },
          pathname: RoutePath.Notification,
        });
      },
    });
  };

  return (
    <Page>
      <Form<UpdateProfileRequest>
        defaultValues={{ displayName: user?.displayName }}
        onSubmit={handleOnSubmit}
      >
        <Header translucent>
          <Header.Back pathname={RoutePath.Profile} />
          <Header.Title>{title}</Header.Title>
        </Header>
        <Content fullscreen>
          <Header collapse="condense">
            <Header.Title size="large">{title}</Header.Title>
          </Header>
          <Grid>
            <Grid.Row>
              <Grid.Cell>
                <Box paddingInline={20} paddingTop={12}>
                  <Typography variant="body-3">
                    {t('intro.changeName')}
                  </Typography>
                </Box>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row>
              <Grid.Cell>
                <Box padding={20}>
                  <Form.Text
                    icon="user"
                    label={t('forms.name')}
                    name="displayName"
                    validation={{
                      required: true,
                    }}
                  />
                </Box>
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </Content>
        <Footer>
          <Form.Submit loading={isPending}>{t('actions.save')}</Form.Submit>
        </Footer>
      </Form>
    </Page>
  );
});
