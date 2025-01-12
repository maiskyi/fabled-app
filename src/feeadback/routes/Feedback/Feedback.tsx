import { FC } from 'react';

import { Page, Header, Content, Text, Form, Box, Grid } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/localization';
import { NotificationType, RoutePath } from '@bootstrap/constants';
import { DTO, useCreateFeedback } from '@network/api';
import { withLoad } from '@core/analytics';
import { useAuth } from '@core/auth';

export const Feedback: FC = withLoad({
  category: 'Profile',
  name: 'Feedback',
})(() => {
  const [, navigate] = useRoute();
  const { t } = useTranslation();
  const { user } = useAuth();

  const title = t('pages.feedback');

  const { isPending, mutateAsync } = useCreateFeedback();

  const handleOnSubmit = async (data: DTO.CreateFeedbackRequest) => {
    await mutateAsync(
      { data },
      {
        onError: () => {
          navigate({
            action: 'replace',
            params: { type: NotificationType.FeedbackFailed },
            pathname: RoutePath.Notification,
          });
        },
        onSuccess: () => {
          navigate({
            action: 'replace',
            params: { type: NotificationType.FeedbackSucceed },
            pathname: RoutePath.Notification,
          });
        },
      }
    );
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content fullscreen inset={false}>
        <Form<DTO.CreateFeedbackRequest> onSubmit={handleOnSubmit}>
          <Grid>
            <Grid.Row>
              <Grid.Cell>
                <Header collapse="condense">
                  <Header.Title size="large">{title}</Header.Title>
                </Header>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row>
              <Grid.Cell>
                <Box padding={16} paddingInline={20}>
                  <Text>{t('intro.feedback')}</Text>
                </Box>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row>
              <Grid.Cell>
                <Form.StarRating
                  label={t('forms.rateUs')}
                  name="rating"
                  validation={{ required: true }}
                />
                <Box padding={16} paddingInline={20}>
                  <Form.Text
                    disabled={!!user?.email}
                    label={t('forms.email')}
                    name="email"
                    validation={{ email: true, required: true }}
                  />
                  <Form.Textarea
                    label={t('forms.message')}
                    name="comment"
                    validation={{ required: true }}
                  />
                </Box>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row>
              <Grid.Cell>
                <Box padding={16} paddingInline={20}>
                  <Form.Submit loading={isPending}>
                    {t('actions.submit')}
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
