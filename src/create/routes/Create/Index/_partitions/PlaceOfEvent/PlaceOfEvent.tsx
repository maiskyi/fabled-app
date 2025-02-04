/* eslint-disable react/prop-types */
import {
  Box,
  FormPickerComponent,
  Swiper,
  Form,
  Content,
  Footer,
  Typography,
} from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';

import { FormField } from '../../../Create.const';
import { Slide } from '../Slide';

import { PlaceOfEventForm } from './PlaceOfEvents.types';

import styles from '../_partitions.module.scss';

export const PlaceOfEvent: FormPickerComponent<string> = ({
  dismiss,
  onChange,
  value,
  options,
}) => {
  const { t } = useTranslation();

  const handleOnSubmit = ({ placeOfEventId }: PlaceOfEventForm) => {
    onChange(placeOfEventId);
    dismiss();
  };

  const initialSlide = options.findIndex(({ value: v }) => v === value);

  return (
    <Form<PlaceOfEventForm>
      defaultValues={{ [FormField.placeOfEventId]: value || options[0].value }}
      onSubmit={handleOnSubmit}
    >
      <Content />
      <Box display="flex" flexDirection="column" gap={8}>
        <Box paddingInline={20}>
          <Typography variant="body-2">
            <Translate id="forms.eventsOfTheFableHappen" />
          </Typography>
        </Box>
        <Box>
          <Form.RadioGroup name={FormField.placeOfEventId}>
            <Swiper
              className={styles.swiper}
              gap={12}
              initialSlide={initialSlide}
              pagination={{ dynamicBullets: true }}
            >
              {options.map(({ label, image, value: v }) => {
                return (
                  <Swiper.Slide className={styles.slide} key={v} width={170}>
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
      </Box>
      <Content />
      <Footer>
        <Form.Submit>{t('actions.confirm')}</Form.Submit>
      </Footer>
    </Form>
  );
};
