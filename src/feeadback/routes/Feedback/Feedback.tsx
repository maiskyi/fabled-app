import { FC } from 'react';

import {
  Page,
  Header,
  Content,
  Container,
  Text,
  Form,
  useUtils,
} from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/localization';
import { useMutationFunction } from '@core/functions';
import { FunctionName } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';

export const Feedback: FC = () => {
  const [, navigate] = useRoute();
  const { t } = useTranslation();
  const { toast } = useUtils();

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
      toast({
        message: t('notifications.feedbackSucceed.message'),
        title: t('notifications.feedbackSucceed.title'),
        variant: 'success',
      });
      navigate({ action: 'back' });
    } catch (_) {
      toast({
        message: t('notifications.feedbackFailed.message'),
        title: t('notifications.feedbackFailed.title'),
        variant: 'error',
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
        <Container padding>
          <Text>{t('intro.feedback')}</Text>
        </Container>
        <Form onSubmit={handleOnSubmit}>
          <Form.StarRating
            label={t('forms.rateUs')}
            name="rating"
            validation={{ required: true }}
          />
          <Container padding>
            <Form.Textarea
              label={t('forms.message')}
              name="message"
              validation={{ required: true }}
            />
          </Container>
          <Container padding>
            <Form.Submit loading={isPending}>{t('actions.submit')}</Form.Submit>
          </Container>
        </Form>
      </Content>
    </Page>
  );
};
