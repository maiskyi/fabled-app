import { FC } from 'react';

import { Page, Header, Content, Form, Container, useUtils } from '@core/uikit';
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
        variant: 'success',
        title: t('notifications.contactUsSubmissionSucceed.title'),
        message: t('notifications.contactUsSubmissionSucceed.message'),
      });
      navigate({ back: true });
    } catch (err) {
      toast({
        variant: 'success',
        title: t('notifications.contactUsSubmissionFailed.title'),
        message: t('notifications.contactUsSubmissionFailed.message'),
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
        <Header.Back onClick={() => navigate({ back: true })} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content fullscreen inset={false}>
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
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
