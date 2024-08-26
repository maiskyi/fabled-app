import { Box, Form, FormInlineComponent, Header } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useConfig } from '@bootstrap/providers';

import { FormField } from '../../../Create.const';

import { ThemeForm } from './Theme.types';

export const Theme: FormInlineComponent = ({ onChange, dismiss, value }) => {
  const { t } = useTranslation();

  const { themes } = useConfig();

  const handleOnSubmit = (form: ThemeForm) => {
    onChange(form.description);
    dismiss();
  };

  return (
    <Form<ThemeForm>
      defaultValues={{ [FormField.Description]: value?.toString() }}
      onSubmit={handleOnSubmit}
    >
      <Header collapse="condense">
        <Header.Title size="large" wrap>
          {t('forms.chooseMoralLessonFromTheFable')}
        </Header.Title>
      </Header>
      <Box padding={16} paddingInline={0}>
        <Form.RadioGroup name={FormField.Description} transparent>
          {themes.map(({ sys: { id }, title, description }) => {
            return (
              <Form.RadioGroup.Item
                description={description}
                key={id}
                label={title}
                value={title}
              />
            );
          })}
        </Form.RadioGroup>
      </Box>
      <Box padding={16} paddingInline={20}>
        <Form.Submit>{t('actions.confirm')}</Form.Submit>
      </Box>
    </Form>
  );
};
