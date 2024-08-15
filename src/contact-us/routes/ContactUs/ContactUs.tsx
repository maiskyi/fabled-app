import { FC } from 'react';

import { Page, Header, Content, Form, Container, Text } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/localization';
import { useMutationFunction } from '@core/functions';
import {
  FunctionName,
  NotificationType,
  RoutePath,
} from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { useAuth } from '@core/auth';

export const ContactUs: FC = () => {
  const [, navigate] = useRoute();
  const { t } = useTranslation();
  const { user } = useAuth();

  const title = t('pages.contactUs');

  const { isPending, mutateAsync } = useMutationFunction<
    DTO.ContactUsRequest,
    DTO.ContactUsResponse
  >({
    name: FunctionName.OnContactUs,
  });

  const handleOnSubmit = async (data: DTO.ContactUsRequest) => {
    try {
      await mutateAsync(data);
      navigate({
        action: 'replace',
        params: {
          type: NotificationType.InquirySucceed,
        },
        pathname: RoutePath.Notification,
      });
    } catch (err) {
      navigate({
        action: 'replace',
        params: {
          type: NotificationType.InquiryFailed,
        },
        pathname: RoutePath.Notification,
      });
    }
  };

  const defaultValues: DTO.ContactUsRequest = {
    email: user?.email,
    subject: '',
    text: '',
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
          <Text>{t('intro.inquiry')}</Text>
        </Container>
        <Form<DTO.ContactUsRequest>
          defaultValues={defaultValues}
          onSubmit={handleOnSubmit}
        >
          <Container padding>
            <Form.Text
              disabled={!!user?.email}
              label={t('forms.email')}
              name="email"
              validation={{ required: true }}
            />
            <Form.Text
              label={t('forms.subject')}
              name="subject"
              validation={{ required: true }}
            />
            <Form.Textarea
              label={t('forms.message')}
              name="text"
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
