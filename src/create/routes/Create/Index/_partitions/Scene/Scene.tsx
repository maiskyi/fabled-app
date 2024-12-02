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
import { Slide } from '../Slide';

import { CharacterForm } from './Scene.types';

import styles from '../_partitions.module.scss';

export const Scene: FormPickerComponent<string> = ({
  dismiss,
  onChange,
  value,
  options,
}) => {
  const { t } = useTranslation();

  const handleOnSubmit = ({ scene }: CharacterForm) => {
    onChange(scene);
    dismiss();
  };

  const initialSlide = options.findIndex(({ value: v }) => v === value);

  return (
    <Form<CharacterForm>
      defaultValues={{ [FormField.Scene]: value }}
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
                  {options.map(({ label, image, value: v }) => {
                    return (
                      <Swiper.Slide className={styles.slide} key={value}>
                        <Form.RadioGroup.Custom value={v}>
                          {({ onSelect, value }) => {
                            return (
                              <Slide
                                caption={label}
                                checked={v === value}
                                onClick={onSelect}
                                src={image}
                              />
                            );
                          }}
                        </Form.RadioGroup.Custom>
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
