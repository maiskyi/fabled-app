import {
  Box,
  FormInlineComponent,
  Header,
  Swiper,
  Card,
  Form,
} from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useConfig } from '@bootstrap/providers';

import { FormField } from '../../../Create.const';

import styles from './Character.module.scss';

export const Character: FormInlineComponent = () => {
  const { t } = useTranslation();
  const { characters } = useConfig();

  return (
    <Form>
      <Box display="flex" flexDirection="column" minHeight="100%">
        <Box flex={0}>
          <Header collapse="condense">
            <Header.Title size="large" wrap>
              Main character
              <br /> will be a...
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
              <Swiper pagination={{ dynamicBullets: true }}>
                {characters.map(
                  ({ sys: { id }, illustration: { url }, title }) => {
                    return (
                      <Swiper.Slide className={styles.slide} key={id}>
                        <Form.RadioGroup.Card
                          key={id}
                          thumb={{
                            aspectRatio: 1,
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
