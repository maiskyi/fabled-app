import { FC } from 'react';

import { Page, Header, Content, Text, Form, Box } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/localization';
import { NotificationType, RoutePath } from '@bootstrap/constants';
import { DTO, useCreateFeedback } from '@network/admin';
import { useUser } from '@common/hooks';

export const Feedback: FC = () => {
  const [, navigate] = useRoute();
  const { t } = useTranslation();
  const { uid, email } = useUser();

  const title = t('pages.feedback');

  const { isPending, mutateAsync } = useCreateFeedback();

  const handleOnSubmit = async (form: DTO.CreateFeedbackVariables) => {
    await mutateAsync(
      { email, uid, ...form },
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
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{t('intro.feedback')}</Text>
        </Box>
        <Form<DTO.CreateFeedbackVariables> onSubmit={handleOnSubmit}>
          <Form.StarRating
            label={t('forms.rateUs')}
            name="rating"
            validation={{ required: true }}
          />
          <Box padding={16} paddingInline={20}>
            <Form.Textarea
              label={t('forms.message')}
              name="comment"
              validation={{ required: true }}
            />
          </Box>
          <Box padding={16} paddingInline={20}>
            <Form.Submit loading={isPending}>{t('actions.submit')}</Form.Submit>
          </Box>
        </Form>
      </Content>
    </Page>
  );
};
