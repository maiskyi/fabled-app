import { FC } from 'react';

import { Page, Header, Content, Container, Text, Form } from '@core/uikit';
import { useRoute } from '@core/navigation';
import { useTranslation } from '@core/localization';

export const Feedback: FC = () => {
  const [, navigate] = useRoute();
  const { t } = useTranslation();

  const title = t('pages.feedback');

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
        <Container padding>
          <Text>{t('intro.feedback')}</Text>
        </Container>
        <Form>
          <Form.StarRating
            name="rating"
            label={t('forms.rateUs')}
            validation={{ required: true }}
          />
          <Container padding>
            <Form.Textarea
              name="message"
              label={t('forms.message')}
              validation={{ required: true }}
            />
          </Container>
          <Container padding>
            <Form.Submit>{t('actions.submit')}</Form.Submit>
          </Container>
        </Form>
      </Content>
    </Page>
  );
};
