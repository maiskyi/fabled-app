import {
  Box,
  Content,
  Footer,
  Form,
  FormInlineComponent,
  Header,
} from '@core/uikit';
import { useTranslation } from '@core/localization';

import { FormField } from '../../../Create.const';

import { ReadTimeForm } from './ReadTime.types';

export const ReadTime: FormInlineComponent = ({ onChange, dismiss, value }) => {
  const { t } = useTranslation();

  const handleOnSubmit = ({ readTime }: ReadTimeForm) => {
    onChange(readTime);
    dismiss();
  };

  const options = [5, 7, 10].map((v) => ({
    label: t('options.minutesValue', { value: v }),
    value: t('options.minutesValue', { value: v }),
  }));

  return (
    <Form<ReadTimeForm>
      defaultValues={{ [FormField.ReadTime]: value?.toString() }}
      onSubmit={handleOnSubmit}
    >
      <Content>
        <Header collapse="condense">
          <Header.Title size="large" wrap>
            {t('forms.pickReadingTime')}
          </Header.Title>
        </Header>
        <Box padding={16} paddingInline={0}>
          <Form.RadioGroup name={FormField.ReadTime} transparent>
            {options.map(({ label, value }) => {
              return (
                <Form.RadioGroup.Item key={value} label={label} value={value} />
              );
            })}
          </Form.RadioGroup>
        </Box>
        <Box padding={16} paddingInline={20}>
          <Form.Submit>{t('actions.confirm')}</Form.Submit>
        </Box>
      </Content>
      <Footer />
    </Form>
  );
};
