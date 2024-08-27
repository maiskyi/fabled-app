/* eslint-disable react/prop-types */
import {
  Box,
  Content,
  Footer,
  Form,
  FormPickerComponent,
  Header,
} from '@core/uikit';
import { useTranslation } from '@core/localization';

import { FormField } from '../../../Create.const';

import { ReadTimeForm } from './ReadTime.types';

export const ReadTime: FormPickerComponent<number> = ({
  onChange,
  dismiss,
  value,
  options,
}) => {
  const { t } = useTranslation();

  const handleOnSubmit = ({ readTime }: ReadTimeForm) => {
    onChange(readTime);
    dismiss();
  };

  return (
    <Form<ReadTimeForm>
      defaultValues={{ [FormField.ReadTime]: value }}
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
            {options.map((props) => {
              return <Form.RadioGroup.Item key={props.value} {...props} />;
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
