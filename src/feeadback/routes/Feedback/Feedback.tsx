import { FC } from 'react';

import { Page, Header, Content, Text, Form, Box } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/localization';
import { useMutationFunction } from '@core/functions';
import {
  FunctionName,
  NotificationType,
  RoutePath,
} from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';

export const Feedback: FC = () => {
  const [, navigate] = useRoute();
  const { t } = useTranslation();

  const title = t('pages.feedback');

  const { isPending, mutateAsync } = useMutationFunction<
    DTO.FeedbackRequest,
    DTO.FeedbackResponse
  >({
    name: FunctionName.OnFeedback,
  });

  const handleOnSubmit = async (form: DTO.FeedbackRequest) => {
    try {
      await mutateAsync(form);
      navigate({
        action: 'replace',
        params: { type: NotificationType.FeedbackSucceed },
        pathname: RoutePath.Notification,
      });
    } catch (_) {
      navigate({
        action: 'replace',
        params: { type: NotificationType.FeedbackFailed },
        pathname: RoutePath.Notification,
      });
    }
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
        <Form onSubmit={handleOnSubmit}>
          <Form.StarRating
            label={t('forms.rateUs')}
            name="rating"
            validation={{ required: true }}
          />
          <Box padding={16} paddingInline={20}>
            <Form.Textarea
              label={t('forms.message')}
              name="message"
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
