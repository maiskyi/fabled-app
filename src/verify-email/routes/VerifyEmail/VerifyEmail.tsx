import { FC } from 'react';

import {
  Box,
  Button,
  Content,
  Header,
  Page,
  Text,
  useUtils,
} from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';
import { useAuth, useSendEmailVerification } from '@core/auth';
import { useRoute } from '@core/navigation';
import { NotificationType, RoutePath } from '@bootstrap/constants';
import { withLoad } from '@core/analytics';

export const VerifyEmail: FC = withLoad({
  category: 'Auth',
  name: 'Verify Email',
})(() => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [, navigate] = useRoute();
  const { toast } = useUtils();

  const title = t('pages.verifyEmail');

  const { isPending, mutateAsync } = useSendEmailVerification();

  const handleOnRequest = async () => {
    try {
      await mutateAsync();
      navigate({
        action: 'replace',
        params: { type: NotificationType.SendVerificationLinkSucceed },
        pathname: RoutePath.Notification,
      });
    } catch (error) {
      toast({
        message: t('notifications.sendVerificationLinkFailed.message'),
        title: t('notifications.sendVerificationLinkFailed.title'),
        variant: 'error',
      });
    }
  };

  const handleOnSupport = () => {
    navigate({ action: 'push', pathname: RoutePath.ContactUs });
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
          <Text>
            <Translate id="intro.verifyEmail" values={{ email: user?.email }} />
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={12}
          padding={16}
          paddingInline={20}
        >
          <Button loading={isPending} onClick={handleOnRequest}>
            {t('actions.requestNewLink')}
          </Button>
          <Button fill="outline" onClick={handleOnSupport}>
            {t('actions.contactSupport')}
          </Button>
        </Box>
      </Content>
    </Page>
  );
});
