import { FC } from 'react';

import { Page, Header, Content, Form, Text, Box } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/localization';
import { NotificationType, RoutePath } from '@bootstrap/constants';
import { useAuth } from '@core/auth';
import { DTO, useCreateInquiry } from '@network/api';
import { withLoad } from '@core/analytics';

export const ContactUs: FC = withLoad({
  category: 'Contact Us',
  name: 'Contact Us',
})(() => {
  const [, navigate] = useRoute();
  const { t } = useTranslation();
  const { user } = useAuth();

  const { isPending, mutateAsync } = useCreateInquiry();

  const title = t('pages.contactUs');

  const handleOnSubmit = async (data: DTO.CreateInquiryRequest) => {
    mutateAsync(
      { data },
      {
        onError: () => {
          navigate({
            action: 'replace',
            params: {
              type: NotificationType.InquiryFailed,
            },
            pathname: RoutePath.Notification,
          });
        },
        onSuccess: () => {
          navigate({
            action: 'replace',
            params: {
              type: NotificationType.InquirySucceed,
            },
            pathname: RoutePath.Notification,
          });
        },
      }
    );
  };

  const defaultValues: DTO.CreateInquiryRequest = {
    email: user?.email,
    message: '',
    subject: '',
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
          <Text>{t('intro.inquiry')}</Text>
        </Box>
        <Form<DTO.CreateInquiryRequest>
          defaultValues={defaultValues}
          onSubmit={handleOnSubmit}
        >
          <Box padding={16} paddingInline={20}>
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
});
