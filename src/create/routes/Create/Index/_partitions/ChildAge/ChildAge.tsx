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

import { ChildAgeForm } from './ChildAge.types';

export const ChildAge: FormPickerComponent<number> = ({
  dismiss,
  onChange,
  value,
}) => {
  const { t } = useTranslation();

  const handleOnSubmit = ({ childAge }: ChildAgeForm) => {
    onChange(childAge);
    dismiss();
  };

  return (
    <Form<ChildAgeForm>
      defaultValues={{
        [FormField.ChildAge]: value || 4,
      }}
      onSubmit={handleOnSubmit}
    >
      <Content />
      <Box display="flex" flexDirection="column" gap={8}>
        <Box paddingInline={20}>
          <Typography variant="body-2">
            <Translate id="forms.theAgeOfManiCharacterIs" />
          </Typography>
        </Box>
        <Box paddingInline={40}>
          <Form.Slide max={10} min={1} name={FormField.ChildAge} snaps ticks />
        </Box>
      </Box>
      <Content />
      <Footer>
        <Form.Submit>{t('actions.confirm')}</Form.Submit>
      </Footer>
    </Form>
  );
};
