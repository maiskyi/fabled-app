import { memo } from 'react';

import { Header, Box, Form, Button, Animation } from '@core/uikit';
import { FunctionName, RoutePath } from '@bootstrap/constants';
import { useTranslation, Translate } from '@core/localization';
import { useConfig } from '@bootstrap/providers';
import { Redirect, useRoute } from '@core/navigation';
import { useTemplate } from '@network/contentful';
import { useMutationFunction } from '@core/functions';
import { DTO } from '@bootstrap/dto';

import { FormField } from '../Create.const';

import { Character } from './_partitions/Character';
import { Scene } from './_partitions/Scene';
import { Theme } from './_partitions/Theme';
import { ReadTime } from './_partitions/ReadTime';
import { IndexForm } from './Index.type';
import { useOptions } from './Index.hooks';

export const Index = memo(function Create() {
  const { t } = useTranslation();
  const { prompts } = useConfig();
  const [, navigate] = useRoute();
  const { render } = useTemplate();
  const { characters, themes, scenes, readTimes } = useOptions();

  const { slug, description: promptDescription, textPrompt } = prompts.at(0);

  const { data, isSuccess, isPending, mutate } = useMutationFunction<
    DTO.CreateFableRequest,
    DTO.CreateFableResponse
  >({
    name: FunctionName.OnFableRequest,
  });

  const handleOnCancel = () => {
    navigate({ action: 'back', pathname: RoutePath.Index });
  };

  const handleOnSubmit = (form: IndexForm) => {
    const { label: characterLabel, note: characterNote } = characters.find(
      ({ value }) => value === form.character
    );

    const { label: sceneLabel } = scenes.find(
      ({ value }) => value === form.scene
    );

    const { label: descriptionLabel, note: descriptionNote } = themes.find(
      ({ value }) => value === form.description
    );

    const { value: readTimeValue, label: readTimeLabel } = readTimes.find(
      ({ value }) => value === form.readTime
    );

    const request = {
      character: characterLabel,
      description: descriptionLabel,
      readTime: readTimeLabel,
      scene: sceneLabel,
    };

    const message = render(promptDescription, {
      character: characterLabel,
      description: descriptionLabel,
      readTime: readTimeLabel,
      scene: sceneLabel,
    });

    const prompt = render(textPrompt, {
      character: characterLabel,
      characterNote: characterNote && `(${characterNote})`,
      contentLength: readTimeValue * 150,
      description: descriptionLabel,
      descriptionNote: descriptionNote && `(${descriptionNote})`,
      scene: sceneLabel,
    });

    mutate({
      ...request,
      message,
      prompt,
      readTime: readTimeValue,
    });
  };

  if (isSuccess) {
    return (
      <Redirect params={{ id: data.id }} pathname={RoutePath.CreateDetails} />
    );
  }

  return (
    <Animation.Message>
      <Box>
        <Form<IndexForm> onSubmit={handleOnSubmit}>
          <Header.Title size="large" wrap>
            <Translate
              components={{
                character: (
                  <Form.Picker<string>
                    component={Character}
                    label={t('forms.mainCharacter')}
                    name={FormField.Character}
                    options={characters}
                    validation={{ required: true }}
                  />
                ),
                description: (
                  <Form.Picker<string>
                    component={Theme}
                    label={t('forms.moralLesson')}
                    name={FormField.Description}
                    options={themes}
                    validation={{ required: true }}
                  />
                ),
                readTime: (
                  <Form.Picker<number>
                    component={ReadTime}
                    label={t('forms.readingTime')}
                    name={FormField.ReadTime}
                    options={readTimes}
                    validation={{ required: true }}
                  />
                ),
                scene: (
                  <Form.Picker<string>
                    component={Scene}
                    label={t('forms.placeOfEvents')}
                    name={FormField.Scene}
                    options={scenes}
                    validation={{ required: true }}
                  />
                ),
              }}
              defaults={promptDescription}
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
            <Form.Submit loading={isPending}>
              {t('actions.writeFable')}
            </Form.Submit>
          </Box>
        </Form>
      </Box>
    </Animation.Message>
  );
});
