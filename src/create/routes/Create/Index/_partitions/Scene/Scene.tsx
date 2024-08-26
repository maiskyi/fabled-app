/* eslint-disable react/prop-types */
import {
  Box,
  FormInlineComponent,
  Header,
  Swiper,
  Form,
  Content,
  Footer,
} from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';
import { useConfig } from '@bootstrap/providers';

import { FormField } from '../../../Create.const';

import { CharacterForm } from './Scene.types';

import styles from './Scene.module.scss';

export const Scene: FormInlineComponent = ({ dismiss, onChange, value }) => {
  const { t } = useTranslation();
  const { scenes } = useConfig();

  const handleOnSubmit = ({ scene }: CharacterForm) => {
    onChange(scene);
    dismiss();
  };

  const initialSlide = scenes.findIndex(({ title }) => title === value);

  return (
    <Form<CharacterForm>
      defaultValues={{ [FormField.Scene]: value.toString() }}
      onSubmit={handleOnSubmit}
    >
      <Content>
        <Box display="flex" flexDirection="column" minHeight="100%">
          <Box flex={0}>
            <Header collapse="condense">
              <Header.Title size="large" wrap>
                <Translate id="forms.eventsOfTheFableHappen" />
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
                name={FormField.Scene}
                validation={{ required: true }}
              >
                <Swiper
                  initialSlide={initialSlide}
                  pagination={{ dynamicBullets: true }}
                >
                  {scenes.map(
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
      </Content>
      <Footer />
    </Form>
  );
};
