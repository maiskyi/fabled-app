/* eslint-disable react/prop-types */
import { Box, FormInlineComponent, Header, Swiper, Form } from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';
import { useConfig } from '@bootstrap/providers';

import { FormField } from '../../../Create.const';

import { CharacterForm } from './Character.types';

import styles from './Character.module.scss';

export const Character: FormInlineComponent = ({
  dismiss,
  onChange,
  value,
}) => {
  const { t } = useTranslation();
  const { characters } = useConfig();

  const handleOnSubmit = ({ character }: CharacterForm) => {
    onChange(character);
    dismiss();
  };

  const initialSlide = characters.findIndex(({ title }) => title === value);

  return (
    <Form<CharacterForm>
      defaultValues={{ [FormField.Character]: value.toString() }}
      onSubmit={handleOnSubmit}
    >
      <Box display="flex" flexDirection="column" minHeight="100%">
        <Box flex={0}>
          <Header collapse="condense">
            <Header.Title size="large" wrap>
              <Translate id="forms.mainCharacterWillBe" />
            </Header.Title>
          </Header>
        </Box>
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          gap={20}
          justifyContent="center"
        >
          <Box>
            <Form.RadioGroup
              name={FormField.Character}
              validation={{ required: true }}
            >
              <Swiper
                initialSlide={initialSlide}
                pagination={{ dynamicBullets: true }}
              >
                {characters.map(
                  ({ sys: { id }, illustration: { url }, title }) => {
                    return (
                      <Swiper.Slide className={styles.slide} key={id}>
                        <Form.RadioGroup.Card
                          key={id}
                          thumb={{
                            aspectRatio: 1,
                            caption: title,
                            children: <img alt={title} src={url} />,
                          }}
                          value={title}
                        />
                      </Swiper.Slide>
                    );
                  }
                )}
              </Swiper>
            </Form.RadioGroup>
          </Box>
          <Box paddingInline={80}>
            <Form.Submit>{t('actions.confirm')}</Form.Submit>
          </Box>
        </Box>
      </Box>
    </Form>
  );
};
