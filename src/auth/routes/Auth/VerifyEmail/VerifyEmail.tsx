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
import { RoutePath } from '@bootstrap/constants';

export const VerifyEmail: FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [, navigate] = useRoute();
  const { toast } = useUtils();

  const title = t('pages.verifyEmail');

  const { isPending, mutateAsync } = useSendEmailVerification();

  const handleOnRequest = async () => {
    try {
      await mutateAsync();
      toast({
        variant: 'success',
        title: t('notifications.sendVerificationLinkSucceed.title'),
        message: t('notifications.sendVerificationLinkSucceed.message'),
      });
    } catch (error) {
      toast({
        variant: 'success',
        title: t('notifications.sendVerificationLinkFailed.title'),
        message: t('notifications.sendVerificationLinkFailed.message'),
      });
    }
  };

  const handleOnSupport = () => {
    navigate({ pathname: RoutePath.ContactUs });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back onClick={() => navigate({ back: true })} />
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
          gap={12}
          padding={16}
          display="flex"
          paddingInline={20}
          flexDirection="column"
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
};
