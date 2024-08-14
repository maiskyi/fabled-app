import { FC, useRef } from 'react';

import {
  Page,
  Header,
  Content,
  Box,
  Text,
  Form,
  FormInstance,
  useUtils,
} from '@core/uikit';
import { useTranslation } from '@core/localization';
import { Redirect, useRoute } from '@core/navigation';
import { useSignUp, SignUpRequest } from '@core/auth';
import { RoutePath } from '@bootstrap/constants';

export const SignUp: FC = () => {
  const { t } = useTranslation();
  const [{ search }] = useRoute<{}, Partial<SignUpRequest>>();
  const form = useRef<FormInstance<SignUpRequest>>();
  const { toast } = useUtils();

  const title = t('pages.signUp');

  const { isPending, data, mutate } = useSignUp();

  const handleOnSubmit = async (data: SignUpRequest) => {
    mutate(data, {
      onError: ({ fields, title, message }) => {
        if (fields) {
          form.current.setErrors(fields);
        } else {
          toast({ message, title, variant: 'error' });
        }
      },
    });
  };

  if (data?.user) {
    return <Redirect pathname={RoutePath.AuthVerifyEmail} />;
  }

  return (
    <Page>
      <Header translucent>
        <Header.Back />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{t('intro.signUp')}</Text>
        </Box>
        <Form<SignUpRequest>
          ref={form}
          defaultValues={search}
          onSubmit={handleOnSubmit}
        >
          <Box padding={16} paddingInline={20}>
            <Form.Text
              name="email"
              label={t('forms.email')}
              validation={{ email: true, required: true }}
            />
            <Form.Password
              name="password"
              label={t('forms.password')}
              validation={{ minLength: 8, required: true }}
            />
          </Box>
          <Box padding={16} paddingInline={20}>
            <Form.Submit loading={isPending}>{t('actions.signUp')}</Form.Submit>
          </Box>
        </Form>
      </Content>
    </Page>
  );
};
