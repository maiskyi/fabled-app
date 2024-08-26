import { Box, Form, FormInlineComponent, Header } from '@core/uikit';
import { useTranslation } from '@core/localization';
import { useConfig } from '@bootstrap/providers';

import { FormField } from '../../../Create.const';

export const Theme: FormInlineComponent = () => {
  const { t } = useTranslation();
  const { themes } = useConfig();

  return (
    <Form>
      <Header collapse="condense">
        <Header.Title size="large" wrap>
          {t('forms.chooseMoralLessonFromTheFable')}
        </Header.Title>
      </Header>
      <Box>
        <Form.RadioGroup name={FormField.Description} transparent>
          {themes.map(({ sys: { id }, title, description }) => {
            return (
              <Form.RadioGroup.Item
                description={description}
                key={id}
                label={title}
                value={id}
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
