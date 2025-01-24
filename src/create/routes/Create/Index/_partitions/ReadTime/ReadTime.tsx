import {
  Box,
  Card,
  Checkbox,
  Content,
  Footer,
  Form,
  FormPickerComponent,
  Typography,
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
      defaultValues={{ [FormField.ReadTime]: value || options[0].value }}
      onSubmit={handleOnSubmit}
    >
      <Content />
      <Box display="flex" flexDirection="column" gap={4}>
        <Box paddingInline={20}>
          <Typography variant="body-2">{t('forms.pickReadingTime')}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap={16}>
          <Form.RadioGroup name={FormField.ReadTime} transparent>
            {options.map((props) => {
              return (
                <Form.RadioGroup.Custom<number>
                  key={props.value}
                  value={props.value}
                >
                  {({ value: v, onSelect }) => {
                    return (
                      <Card onClick={onSelect} outline={v === props.value}>
                        <Card.Content>
                          <Box alignItems="center" display="flex" gap={12}>
                            <Checkbox checked={v === props.value} />
                            <Typography weight="bold">{props.label}</Typography>
                          </Box>
                        </Card.Content>
                      </Card>
                    );
                  }}
                </Form.RadioGroup.Custom>
              );
            })}
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
