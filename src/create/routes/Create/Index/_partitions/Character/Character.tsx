/* eslint-disable react/prop-types */
import {
  Box,
  FormPickerComponent,
  Header,
  Swiper,
  Form,
  Content,
  SafeArea,
} from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';

import { FormField } from '../../../Create.const';

import { CharacterForm } from './Character.types';

import styles from './Character.module.scss';

export const Character: FormPickerComponent<string> = ({
  dismiss,
  onChange,
  value,
  options,
}) => {
  const { t } = useTranslation();

  const handleOnSubmit = ({ character }: CharacterForm) => {
    onChange(character);
    dismiss();
  };

  const initialSlide = options.findIndex(({ value: v }) => v === value);

  return (
    <Form<CharacterForm>
      defaultValues={{ [FormField.Character]: value }}
      onSubmit={handleOnSubmit}
    >
      <Content>
        <SafeArea
          display="flex"
          flexDirection="column"
          minHeight="100%"
          safe={['bottom']}
        >
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
                  {options.map(({ value, label, image }) => {
                    return (
                      <Swiper.Slide className={styles.slide} key={value}>
                        <Form.RadioGroup.Card
                          key={value}
                          thumb={{
                            aspectRatio: 1,
                            caption: label,
                            children: <img alt={label} src={image} />,
                          }}
                          value={value}
                        />
                      </Swiper.Slide>
                    );
                  })}
                </Swiper>
              </Form.RadioGroup>
            </Box>
            <Box paddingInline={80}>
              <Form.Submit>{t('actions.confirm')}</Form.Submit>
            </Box>
          </Box>
        </SafeArea>
      </Content>
    </Form>
  );
};
