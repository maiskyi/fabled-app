import { FC } from 'react';

import {
  Page,
  Header,
  Content,
  Form,
  Container,
  Text,
  useUtils,
} from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/localization';
import { useMutationFunction } from '@core/functions';
import { FunctionName } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';
import { useAuth } from '@core/auth';

export const ContactUs: FC = () => {
  const [, navigate] = useRoute();
  const { t } = useTranslation();
  const { toast } = useUtils();
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
      toast({
        message: t('notifications.inquirySucceed.message'),
        title: t('notifications.inquirySucceed.title'),
        variant: 'success',
      });
      navigate({ action: 'back' });
    } catch (err) {
      toast({
        message: t('notifications.inquiryFailed.message'),
        title: t('notifications.inquiryFailed.title'),
        variant: 'error',
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
          onSubmit={handleOnSubmit}
          defaultValues={defaultValues}
        >
          <Container padding>
            <Form.Text
              name="email"
              label={t('forms.email')}
              disabled={!!user?.email}
              validation={{ required: true }}
            />
            <Form.Text
              name="subject"
              label={t('forms.subject')}
              validation={{ required: true }}
            />
            <Form.Textarea
              name="text"
              label={t('forms.message')}
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
