import { memo } from 'react';

import { Box, Content, Form, Header, Page, Text } from '@core/uikit';
import { NotificationType, RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import {
  useConfirmPasswordReset,
  ConfirmPasswordResetRequest,
} from '@core/auth';
import { useRoute } from '@core/navigation';

import { AuthActionModeProps } from '../../Action.types';

export const ResetPassword = memo<AuthActionModeProps>(function ResetPassword({
  oobCode,
}: AuthActionModeProps) {
  const { t } = useTranslation();
  const [, navigate] = useRoute();

  const title = t('pages.resetPassword');

  const { isPending, mutate: confirmPasswordReset } = useConfirmPasswordReset();

  const handleOnSubmit = ({
    newPassword,
  }: Partial<ConfirmPasswordResetRequest>) => {
    confirmPasswordReset(
      { newPassword, oobCode },
      {
        onError: ({ fields, code }) => {
          if (!fields) {
            return navigate({
              action: 'replace',
              params: { type: NotificationType.ConfirmPasswordResetFailed },
              pathname: RoutePath.Notification,
              search: {
                back: RoutePath.Auth,
                code,
                next: RoutePath.ForgotPassword,
              },
            });
          }
        },
        onSuccess: () =>
          navigate({
            action: 'replace',
            params: { type: NotificationType.ConfirmPasswordResetSucceed },
            pathname: RoutePath.Notification,
            search: {
              back: RoutePath.Auth,
              next: RoutePath.SignIn,
            },
          }),
      }
    );
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Auth} />
        <Header.Title>{title}</Header.Title>
      </Header>
      <Content>
        <Header collapse="condense">
          <Header.Title size="large" wrap>
            {title}
          </Header.Title>
        </Header>
        <Box padding={16} paddingInline={20}>
          <Text>{t('intro.resetPassword')}</Text>
        </Box>
        <Form<Partial<ConfirmPasswordResetRequest>> onSubmit={handleOnSubmit}>
          <Box padding={16} paddingInline={20}>
            <Form.Password
              label={t('forms.newPassword')}
              name="newPassword"
              validation={{ minLength: 8, required: true }}
            />
          </Box>
          <Box padding={16} paddingInline={20}>
            <Form.Submit loading={isPending}>
              {t('actions.confirmNewPassword')}
            </Form.Submit>
          </Box>
        </Form>
      </Content>
    </Page>
  );
});
