import { memo } from 'react';

import { Header, Box, Form, Button, Animation } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation, Translate } from '@core/localization';
import { useConfig } from '@bootstrap/providers';
import { Redirect, useRoute } from '@core/navigation';
import { DTO, useCreateStory } from '@network/api';
import { useAuth } from '@core/auth';

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
  const { characters, themes, scenes, readTimes } = useOptions();
  const { user } = useAuth();

  const {
    mutate,
    isPending,
    isSuccess,
    isError,
    error = [],
    data,
  } = useCreateStory<DTO.Errors>();

  const { message: outline } = prompts.at(0);

  const isAccessDenied = error?.some(
    ({ extensions: { code } }) => code === DTO.ExtensionCode.KS_ACCESS_DENIED
  );

  const handleOnCancel = () => {
    navigate({ action: 'back', pathname: RoutePath.Index });
  };

  const handleOnSubmit = (form: IndexForm) => {
    const { value: readTimeValue } = readTimes.find(
      ({ value }) => value === form.readTime
    );

    mutate({
      data: {
        character: {
          connect: {
            id: form.character,
          },
        },
        firebaseUserId: user?.uid,
        moralLesson: {
          connect: {
            id: form.description,
          },
        },
        placeOfEvent: {
          connect: {
            id: form.scene,
          },
        },
        prompt: {
          connect: {
            id: prompts.at(0).id,
          },
        },
        readTime: readTimeValue,
      },
    });
  };

  if (isSuccess) {
    return (
      <Redirect
        params={{ id: data?.createStory.id }}
        pathname={RoutePath.CreateDetails}
      />
    );
  }

  if (isError && isAccessDenied) {
    return <Redirect action="push" pathname={RoutePath.Subscribe} />;
  }

  return (
    <Animation.Message>
      <Box>
        <Form<IndexForm> defaultValues={{}} onSubmit={handleOnSubmit}>
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
