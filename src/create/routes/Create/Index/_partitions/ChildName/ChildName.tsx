import { get } from 'lodash';

import {
  Box,
  FormPickerComponent,
  Form,
  Content,
  Footer,
  Typography,
} from '@core/uikit';
import { Translate, useTranslation } from '@core/localization';

import { FormField } from '../../../Create.const';

import { ChildNameForm } from './ChildName.types';

export const ChildName: FormPickerComponent<string> = ({
  dismiss,
  onChange,
  value,
  options,
}) => {
  const { t } = useTranslation();

  const handleOnSubmit = ({ childName }: ChildNameForm) => {
    onChange(childName);
    dismiss();
  };

  return (
    <Form<ChildNameForm>
      defaultValues={{
        [FormField.ChildName]: value || get(options, [0, 'value']),
      }}
      onSubmit={handleOnSubmit}
    >
      <Content />
      <Box display="flex" flexDirection="column" gap={8}>
        <Box paddingInline={20}>
          <Typography variant="body-2">
            <Translate id="forms.mainCharacterWillBe" />
          </Typography>
        </Box>
        <Box paddingInline={20}>
          <Form.Text
            autofocus
            label={t('forms.childName')}
            name={FormField.ChildName}
          />
        </Box>
      </Box>
      <Content />
      <Footer>
        <Form.Submit>{t('actions.confirm')}</Form.Submit>
      </Footer>
    </Form>
  );
};
