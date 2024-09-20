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
import { useRoute } from '@core/navigation';
import {
  useCreateUserWithEmailAndPassword,
  CreateUserWithEmailAndPasswordRequest,
} from '@core/auth';
import { RoutePath, VALIDATION_PATTERNS } from '@bootstrap/constants';
import { Disclaimer } from '@common/features';

export const SignUp: FC = () => {
  const { t } = useTranslation();
  const form = useRef<FormInstance<CreateUserWithEmailAndPasswordRequest>>();
  const { toast } = useUtils();
  const [, navigate] = useRoute();

  const title = t('pages.signUp');

  const { isPending, mutate: createUserWithEmailAndPassword } =
    useCreateUserWithEmailAndPassword();

  const handleOnSubmit = async (
    data: CreateUserWithEmailAndPasswordRequest
  ) => {
    createUserWithEmailAndPassword(data, {
      onError: ({ fields, title, message }) => {
        if (fields) {
          form.current.setErrors(fields);
        } else {
          toast({ message, title, variant: 'error' });
        }
      },
      onSuccess: () =>
        navigate({ action: 'replace', pathname: RoutePath.VerifyEmail }),
    });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Auth} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large">{title}</Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{t('intro.signUp')}</Text>
        </Box>
        <Form<CreateUserWithEmailAndPasswordRequest>
          onSubmit={handleOnSubmit}
          ref={form}
        >
          <Box padding={16} paddingInline={20}>
            <Form.Text
              icon="mail-outline"
              label={t('forms.email')}
              name="email"
              validation={{ email: true, required: true }}
            />
            <Form.Password
              errors={{
                pattern: [
                  t('validation.containsNumber', {
                    label: t('forms.password'),
                  }),
                  t('validation.containsUppercaseLetter', {
                    label: t('forms.password'),
                  }),
                  t('validation.containsSpecialCharacter', {
                    label: t('forms.password'),
                  }),
                ],
              }}
              help={t('help.password')}
              icon="lock-closed-outline"
              label={t('forms.password')}
              name="password"
              validation={{
                minLength: 8,
                pattern: [
                  VALIDATION_PATTERNS.CONTAINS_NUMBER,
                  VALIDATION_PATTERNS.CONTAINS_UPPERCASE_LETTER,
                  VALIDATION_PATTERNS.CONTAINS_SPECIAL_CHARACTER,
                ],
                required: true,
              }}
            />
          </Box>
          <Box padding={16} paddingInline={20}>
            <Form.Submit loading={isPending}>{t('actions.signUp')}</Form.Submit>
          </Box>
          <Box padding={12} paddingInline={20} textAlign="center">
            <Disclaimer />
          </Box>
        </Form>
      </Content>
    </Page>
  );
};
