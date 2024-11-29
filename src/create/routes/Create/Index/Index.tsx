import { FC } from 'react';

import {
  Header,
  Box,
  Form,
  Button,
  Animation,
  useUtils,
  Spinner,
  Grid,
} from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation, Translate } from '@core/localization';
import { useConfig } from '@bootstrap/providers';
import { Redirect, useRoute } from '@core/navigation';
import { useCreateStory } from '@network/api';
import { withLoad } from '@core/analytics';

import { FormField } from '../Create.const';

import { Character } from './_partitions/Character';
import { Scene } from './_partitions/Scene';
import { Theme } from './_partitions/Theme';
import { ReadTime } from './_partitions/ReadTime';
import { IndexForm } from './Index.type';
import { useOptions } from './Index.hooks';

interface IndexProps {
  loading: boolean;
}

export const Index: FC<IndexProps> = withLoad({
  category: 'Fable',
  name: 'Create Fable Index',
})(function Create({ loading }) {
  const { t } = useTranslation();
  const { prompts } = useConfig();
  const [, navigate] = useRoute();
  const { characters, themes, scenes, readTimes } = useOptions();
  const { toast } = useUtils();

  const { data, isPending, isSuccess, mutate } = useCreateStory();

  const { message: outline } = prompts.at(0);

  const handleOnCancel = () => {
    navigate({ action: 'back', pathname: RoutePath.Index });
  };

  const handleOnSubmit = (form: IndexForm) => {
    mutate(
      {
        data: {
          characterId: form.character,
          moralLessonId: form.description,
          placeOfEventId: form.scene,
          promptId: prompts.at(0).id,
          readTime: form.readTime,
        },
      },
      {
        onError: ({ statusCode, message }) => {
          if (statusCode === 403) {
            navigate({
              action: 'push',
              pathname: RoutePath.Subscribe,
            });
          } else {
            toast({
              message: Array.isArray(message) ? message[0] : message,
              variant: 'error',
            });
          }
        },
      }
    );
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        padding={16}
        paddingInline={20}
      >
        <Spinner />
      </Box>
    );
  }

  if (isSuccess) {
    return (
      <Redirect params={{ id: data?.id }} pathname={RoutePath.CreateDetails} />
    );
  }

  return (
    <Grid.Row>
      <Grid.Cell>
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
      </Grid.Cell>
    </Grid.Row>
  );
});
