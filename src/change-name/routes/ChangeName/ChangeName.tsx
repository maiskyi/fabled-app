import { Box, Content, Form, Grid, Header, Page } from '@core/uikit';
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
      <Header translucent>
        <Header.Back pathname={RoutePath.Profile} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content fullscreen>
        <Form<UpdateProfileRequest>
          defaultValues={{ displayName: user?.displayName }}
          onSubmit={handleOnSubmit}
        >
          <Header collapse="condense">
            <Header.Title size="large">{title}</Header.Title>
          </Header>
          <Grid>
            <Grid.Row>
              <Grid.Cell>
                <Box padding={16} paddingInline={20}>
                  <Form.Text
                    icon="person-outline"
                    label={t('forms.name')}
                    name="displayName"
                    validation={{
                      required: true,
                    }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  padding={16}
                  paddingInline={20}
                >
                  <Form.Submit loading={isPending}>
                    {t('actions.save')}
                  </Form.Submit>
                </Box>
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </Form>
      </Content>
    </Page>
  );
});
