import { FC } from 'react';

import { useConfig } from '@bootstrap/providers';
import { Animation, Box, Button, Grid, useFormControl } from '@core/uikit';

import { FormField } from '../../../Create.const';

export const PromtOptions: FC = () => {
  const { prompts } = useConfig();

  const [value, { setValue }] = useFormControl<string>({
    name: FormField.PromptId,
  });

  if (value) return null;

  return (
    <Grid.Row>
      <Grid.Cell>
        <Animation.Message>
          <Box
            display="flex"
            gap={8}
            justifyContent="flex-end"
            paddingInline={20}
            paddingTop={8}
          >
            {prompts.map(({ id, title }) => {
              return (
                <Button
                  color="secondary"
                  fill="outline"
                  key={id}
                  onClick={() => setValue(id)}
                >
                  {title}
                </Button>
              );
            })}
          </Box>
        </Animation.Message>
      </Grid.Cell>
    </Grid.Row>
  );
};
