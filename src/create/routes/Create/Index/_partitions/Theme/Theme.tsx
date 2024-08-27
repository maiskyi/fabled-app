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

import { ThemeForm } from './Theme.types';

export const Theme: FormPickerComponent<string> = ({
  onChange,
  dismiss,
  value,
  options,
}) => {
  const { t } = useTranslation();

  const handleOnSubmit = (form: ThemeForm) => {
    onChange(form.description);
    dismiss();
  };

  return (
    <Form<ThemeForm>
      defaultValues={{ [FormField.Description]: value?.toString() }}
      onSubmit={handleOnSubmit}
    >
      <Content>
        <Header collapse="condense">
          <Header.Title size="large" wrap>
            {t('forms.chooseMoralLessonFromTheFable')}
          </Header.Title>
        </Header>
        <Box padding={16} paddingInline={0}>
          <Form.RadioGroup name={FormField.Description} transparent>
            {options.map((props) => {
              return <Form.RadioGroup.Item key={props.value} {...props} />;
            })}
          </Form.RadioGroup>
        </Box>
      </Content>
      <Footer>
        <Form.Submit>{t('actions.confirm')}</Form.Submit>
      </Footer>
    </Form>
  );
};
