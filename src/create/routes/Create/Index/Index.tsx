import { memo } from 'react';

import { Header, Box, Form, Button, Animation } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation, Translate } from '@core/localization';
import { useConfig } from '@bootstrap/providers';
import { useRoute } from '@core/navigation';

import { FormField } from '../Create.const';

import { Character } from './_partitions/Character';
import { Scene } from './_partitions/Scene';
import { Theme } from './_partitions/Theme';

export const Index = memo(function Create() {
  const { t } = useTranslation();
  const { prompts } = useConfig();
  const [, navigate] = useRoute();

  const { slug, description } = prompts[0];

  const handleOnCancel = () => {
    navigate({ action: 'back', pathname: RoutePath.Index });
  };

  return (
    <Animation.Message>
      <Box>
        <Form>
          <Header.Title size="large" wrap>
            <Translate
              components={{
                character: (
                  <Form.Inline
                    component={Character}
                    label={t('forms.mainCharacter')}
                    name={FormField.Character}
                    validation={{ required: true }}
                  />
                ),
                description: (
                  <Form.Inline
                    component={Theme}
                    label={t('forms.moralLesson')}
                    name={FormField.Description}
                    validation={{ required: true }}
                  />
                ),
                scene: (
                  <Form.Inline
                    component={Scene}
                    label={t('forms.placeOfEvents')}
                    name={FormField.Scene}
                    validation={{ required: true }}
                  />
                ),
              }}
              defaults={description}
              id={slug}
            />
          </Header.Title>
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
        </Form>
      </Box>
    </Animation.Message>
  );
});
