import { memo } from 'react';

import {
  Content,
  Header,
  Page,
  Box,
  Message,
  Form,
  Button,
  BOT_AVATAR_SRC,
} from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation, Translate } from '@core/localization';
import { useUser } from '@common/hooks';
import { useConfig } from '@bootstrap/providers';
import { useRoute } from '@core/navigation';

import { FormField } from './Create.const';
import { Character } from './_partitions/Character';
import { Scene } from './_partitions/Scene';
import { Plot } from './_partitions/Plot';

export const Create = memo(function Create() {
  const { t } = useTranslation();
  const { displayName: userDisplayName, avatar: userAvatar } = useUser();
  const { prompts } = useConfig();
  const [, navigate] = useRoute();

  const { slug, description } = prompts[0];

  const handleOnCancel = () => {
    navigate({ action: 'back', pathname: RoutePath.Index });
  };

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>
        <Form>
          <Box display="flex" flexDirection="column" minHeight="100%">
            <Box>
              <Message
                avatar={BOT_AVATAR_SRC}
                origin="companion"
                title={t('copy.fabledAi')}
              >
                {t('copy.createFableAiGreeting', {
                  displayName: userDisplayName,
                })}
              </Message>
              <Message
                avatar={userAvatar}
                origin="me"
                title={t('copy.fabledAi')}
              >
                {t('copy.createFableAiGreeting', {
                  displayName: userDisplayName,
                })}
              </Message>
            </Box>
            <Box alignItems="center" display="flex">
              <Header collapse="condense" key={slug}>
                <Header.Title size="large" wrap>
                  <Translate
                    components={{
                      character: (
                        <Form.Inline
                          component={Character}
                          name={FormField.Character}
                          validation={{ required: true }}
                        />
                      ),
                      description: (
                        <Form.Inline
                          component={Plot}
                          name={FormField.Description}
                          validation={{ required: true }}
                        />
                      ),
                      scene: (
                        <Form.Inline
                          component={Scene}
                          name={FormField.Scene}
                          validation={{ required: true }}
                        />
                      ),
                    }}
                    defaults={description}
                    id={slug}
                  />
                </Header.Title>
              </Header>
            </Box>
            <Box
              display="flex"
              flex={0}
              gap={8}
              justifyContent="flex-end"
              padding={16}
              paddingInline={20}
            >
              <Button fill="outline" onClick={handleOnCancel}>
                {t('actions.cancel')}
              </Button>
              <Form.Submit>{t('actions.writeFable')}</Form.Submit>
            </Box>
          </Box>
        </Form>
      </Content>
    </Page>
  );
});
