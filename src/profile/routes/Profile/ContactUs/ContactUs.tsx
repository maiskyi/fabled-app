import { FC } from 'react';

import { Page, Header, Content, Form, Container } from '@core/uikit';
import { useRoute, Redirect } from '@core/navigation';
import { useTranslation } from '@core/localization';
import { useFunction } from '@core/functions';
import { FunctionName, RoutePath } from '@bootstrap/constants';
import { DTO } from '@bootstrap/dto';

export const ContactUs: FC = () => {
  const [, navigate] = useRoute();
  const { t } = useTranslation();

  const title = t('pages.contactUs');

  const { isSuccess, isPending, mutateAsync } = useFunction<
    DTO.ContactUsRequest,
    DTO.ContactUsResponse
  >({
    name: FunctionName.OnContactUs,
  });

  const handleOnSubmit = async (data: DTO.ContactUsRequest) => {
    await mutateAsync(data);
  };

  if (isSuccess) {
    return <Redirect pathname={RoutePath.ProfileContactUs} />;
  }

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
        <Form<DTO.ContactUsRequest> onSubmit={handleOnSubmit}>
          <Container padding>
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
