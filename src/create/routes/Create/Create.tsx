import { memo, useState } from 'react';
import classNames from 'classnames';

import {
  Content,
  Header,
  Page,
  Box,
  Message,
  Footer,
  Button,
} from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation, Translate } from '@core/localization';
import { useUserDisplayName } from '@common/hooks';
import { useConfig } from '@bootstrap/providers';
import { LinkVoid } from '@core/navigation';

import styles from './Create.module.scss';

import { CreateForm } from './Create.types';

export const Create = memo(function Create() {
  const { t } = useTranslation();
  const { displayName } = useUserDisplayName();
  const { prompts } = useConfig();

  const [state, setState] = useState<CreateForm>({
    character: '',
    description: '',
    scene: '',
  });

  return (
    <Page>
      <Header translucent>
        <Header.Back pathname={RoutePath.Index} />
      </Header>
      <Content>
        <Box display="flex" flexDirection="column" minHeight="100%">
          <Box flex={0}>
            <Message
              color="dark"
              title={t('copy.hiUserGreeting', { displayName })}
            >
              {t('pages.create')}
            </Message>
          </Box>
          <Box alignItems="center" display="flex" flex={1}>
            {prompts.map(({ slug, description }) => {
              return (
                <Header collapse="condense" key={slug}>
                  <Header.Title size="large" wrap>
                    <Translate
                      components={{
                        character: (
                          <LinkVoid
                            className={classNames(styles.select, {
                              [styles.none]: !state.character,
                            })}
                          />
                        ),
                        description: (
                          <LinkVoid
                            className={classNames(styles.select, {
                              [styles.none]: !state.description,
                            })}
                          />
                        ),
                        scene: (
                          <LinkVoid
                            className={classNames(styles.select, {
                              [styles.none]: !state.scene,
                            })}
                          />
                        ),
                      }}
                      defaults={description}
                      id={slug}
                      values={{
                        character: t('actions.clickToSelect').toLowerCase(),
                        description: t('actions.clickToSelect').toLowerCase(),
                        scene: t('actions.clickToSelect').toLowerCase(),
                      }}
                    />
                  </Header.Title>
                </Header>
              );
            })}
          </Box>
          <Box flex={0} padding={16} paddingInline={20}>
            <Button>{t('actions.writeFable')}</Button>
          </Box>
        </Box>
      </Content>
      <Footer />
    </Page>
  );
});
