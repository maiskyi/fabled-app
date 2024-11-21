import { useRef } from 'react';

import {
  Box,
  Content,
  Form,
  FormInstance,
  Header,
  Page,
  useUtils,
} from '@core/uikit';
import { useTranslation } from '@core/localization';
import {
  NotificationType,
  RoutePath,
  VALIDATION_PATTERNS,
} from '@bootstrap/constants';
import { useUpdatePassword, UpdatePasswordRequest } from '@core/auth';
import { useRoute } from '@core/navigation';
import { withLoad } from '@core/analytics';

export const ChangePassword = withLoad({
  category: 'Profile',
  name: 'Change Password',
})(function ChangePassword() {
  const { t } = useTranslation();
  const form = useRef<FormInstance<UpdatePasswordRequest>>();
  const { toast } = useUtils();
  const [, navigate] = useRoute();

  const title = t('pages.changePassword');

  const { mutate, isPending } = useUpdatePassword();

  const handleOnSubmit = (data: UpdatePasswordRequest) => {
    mutate(data, {
      onError: ({ fields, title, message }) => {
        if (fields) {
          form.current.setErrors(fields);
        } else {
          toast({ message, title, variant: 'error' });
        }
      },
      onSuccess: () => {
        navigate({
          action: 'replace',
          params: { type: NotificationType.UpdatePasswordSucceed },
          pathname: RoutePath.Notification,
        });
      },
    });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Profile} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content fullscreen>
        <Form<UpdatePasswordRequest> onSubmit={handleOnSubmit} ref={form}>
          <Header collapse="condense">
            <Header.Title size="large">{title}</Header.Title>
          </Header>
          <Box padding={16} paddingInline={20}>
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
              label={t('forms.newPassword')}
              name="newPassword"
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
          <Box
            display="flex"
            flexDirection="column"
            padding={16}
            paddingInline={20}
          >
            <Form.Submit loading={isPending}>
              {t('actions.confirmNewPassword')}
            </Form.Submit>
          </Box>
        </Form>
      </Content>
    </Page>
  );
});
