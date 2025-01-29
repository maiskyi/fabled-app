import { FC } from 'react';

import {
  Page,
  Header,
  Content,
  Form,
  Box,
  Grid,
  Footer,
  Typography,
} from '@core/uikit';
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

  const defaultValues: DTO.CreateFeedbackRequest = {
    comment: '',
    email: user?.email,
    rating: 0,
  };

  return (
    <Page>
      <Form<DTO.CreateFeedbackRequest>
        defaultValues={defaultValues}
        onSubmit={handleOnSubmit}
      >
        <Header translucent>
          <Header.Back pathname={RoutePath.Profile} />
          <Header.Title>{title}</Header.Title>
        </Header>
        <Content fullscreen inset={false}>
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
                <Box paddingInline={20} paddingTop={12}>
                  <Typography variant="body-2">
                    {t('intro.feedback')}
                  </Typography>
                </Box>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row>
              <Grid.Cell>
                <Box padding={20}>
                  <Form.StarRating
                    label={t('forms.rateUs')}
                    name="rating"
                    validation={{ max: 5, min: 1, required: true }}
                  />
                  <Form.Text
                    icon="at-sign"
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
                <Box padding={16} paddingInline={20}></Box>
              </Grid.Cell>
            </Grid.Row>
          </Grid>
        </Content>
        <Footer>
          <Form.Submit loading={isPending}>{t('actions.submit')}</Form.Submit>
        </Footer>
      </Form>
    </Page>
  );
});
