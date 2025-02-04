/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  Content,
  Footer,
  Form,
  FormPickerComponent,
  Typography,
} from '@core/uikit';
import { useTranslation } from '@core/localization';

import { FormField } from '../../../Create.const';

import { MoralLessonForm } from './MoralLesson.types';

export const MoralLesson: FormPickerComponent<string> = ({
  onChange,
  dismiss,
  value,
  options,
}) => {
  const { t } = useTranslation();

  const handleOnSubmit = ({ moralLessonId }: MoralLessonForm) => {
    onChange(moralLessonId);
    dismiss();
  };

  return (
    <Form<MoralLessonForm>
      defaultValues={{ [FormField.MoralLessonId]: value || options[0].value }}
      onSubmit={handleOnSubmit}
    >
      <Content>
        <Box display="flex" flexDirection="column" gap={4}>
          <Box paddingInline={20}>
            <Typography variant="body-2">
              {t('forms.chooseMoralLessonFromTheFable')}
            </Typography>
          </Box>
          <Box>
            <Form.RadioGroup name={FormField.MoralLessonId} transparent>
              <Box display="flex" flexDirection="column">
                {options.map((props) => {
                  return (
                    <Form.RadioGroup.Custom
                      key={props.value}
                      value={props.value}
                    >
                      {({ value, onSelect }) => {
                        const selected = value === props.value;
                        return (
                          <Card onClick={onSelect} outline={selected}>
                            <Card.Content>
                              <Box
                                display="flex"
                                flexDirection="column"
                                gap={4}
                              >
                                <Typography
                                  color={selected ? 'secondary' : undefined}
                                  variant="body-2"
                                  weight="medium"
                                >
                                  {props.label}
                                </Typography>
                                <Typography muted variant="body-3">
                                  {props.note}
                                </Typography>
                              </Box>
                            </Card.Content>
                          </Card>
                        );
                      }}
                    </Form.RadioGroup.Custom>
                  );
                })}
              </Box>
            </Form.RadioGroup>
          </Box>
        </Box>
      </Content>
      <Footer>
        <Form.Submit>{t('actions.confirm')}</Form.Submit>
      </Footer>
    </Form>
  );
};
