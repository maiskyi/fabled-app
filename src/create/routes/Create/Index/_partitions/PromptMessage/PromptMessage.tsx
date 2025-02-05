import { FC } from 'react';

import {
  Animation,
  Box,
  Button,
  Form,
  Grid,
  Header,
  useFormControl,
} from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';
import { useConfig } from '@bootstrap/providers';
import { RoutePath } from '@bootstrap/constants';
import { useRoute } from '@core/navigation';

import { Character } from '../Character';
import { PlaceOfEvent } from '../PlaceOfEvent';
import { MoralLesson } from '../MoralLesson';
import { ReadTime } from '../ReadTime';
import { ChildGender } from '../ChildGender';
import { FormField } from '../../../Create.const';

import { useOptions } from './PromptMessage.hooks';

interface PromptMessageProps {
  isPending: boolean;
}

export const PromptMessage: FC<PromptMessageProps> = ({ isPending }) => {
  const { t } = useTranslation();
  const { prompts } = useConfig();
  const [, navigate] = useRoute();
  const { characters, themes, placesOfEvent, readTimes } = useOptions();

  const [promptId] = useFormControl({
    name: FormField.PromptId,
  });

  const outline = prompts.find(({ id }) => id === promptId)?.message;

  const handleOnCancel = () => {
    navigate({ action: 'back', pathname: RoutePath.Index });
  };

  if (!outline) return null;

  return (
    <Grid.Row>
      <Grid.Cell>
        <Animation.Message>
          <Box>
            <Header.Title size="large" wrap>
              <Translate
                components={{
                  character: (
                    <Form.Picker<string>
                      component={Character}
                      label={t('forms.mainCharacter')}
                      name={FormField.CharacterId}
                      options={characters}
                      validation={{ required: true }}
                    />
                  ),
                  childGender: (
                    <Form.Picker<string>
                      component={ChildGender}
                      label={t('forms.gender')}
                      name={FormField.ChildGender}
                      options={characters}
                      validation={{ required: true }}
                    />
                  ),
                  description: (
                    <Form.Picker<string>
                      component={MoralLesson}
                      height="full"
                      label={t('forms.moralLesson')}
                      name={FormField.MoralLessonId}
                      options={themes}
                      validation={{ required: true }}
                    />
                  ),
                  readTime: (
                    <Form.Picker<number>
                      component={ReadTime}
                      label={t('forms.readTime')}
                      name={FormField.ReadTime}
                      options={readTimes}
                      validation={{ required: true }}
                    />
                  ),
                  scene: (
                    <Form.Picker<string>
                      component={PlaceOfEvent}
                      label={t('forms.placeOfEvents')}
                      name={FormField.placeOfEventId}
                      options={placesOfEvent}
                      validation={{ required: true }}
                    />
                  ),
                }}
                defaults={outline}
                id="slug"
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
              <Button color="dark" fill="outline" onClick={handleOnCancel}>
                {t('actions.cancel')}
              </Button>
              <Form.Submit icon="feather" loading={isPending}>
                {t('actions.writeFable')}
              </Form.Submit>
            </Box>
          </Box>
        </Animation.Message>
      </Grid.Cell>
    </Grid.Row>
  );
};
