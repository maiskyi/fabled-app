import { FC } from 'react';

import {
  Page,
  Header,
  Content,
  Form,
  Box,
  Grid,
  Typography,
  Footer,
} from '@core/uikit';
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
      <Form<DTO.CreateInquiryRequest>
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
                  <Typography variant="body-3">{t('intro.inquiry')}</Typography>
                </Box>
              </Grid.Cell>
            </Grid.Row>
            <Grid.Row>
              <Grid.Cell>
                <Box padding={20}>
                  <Form.Text
                    disabled={!!user?.email}
                    icon="at-sign"
                    label={t('forms.email')}
                    name="email"
                    validation={{ email: true, required: true }}
                  />
                  <Form.Text
                    icon="mail"
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
