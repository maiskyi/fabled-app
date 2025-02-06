import { FC } from 'react';

import { Box, Form, useUtils, Spinner } from '@core/uikit';
import { RoutePath } from '@bootstrap/constants';
import { useTranslation } from '@core/localization';
import { Redirect } from '@core/navigation';
import { useCreateStory } from '@network/api';
import { withLoad } from '@core/analytics';
import { usePromptToSubscribe } from '@core/purchases';
import { PromptToSubscribe } from '@common/features';

import { PromtOptions } from './_partitions/PromtOptions';
import { IndexForm } from './Index.type';
import { PromptMessage } from './_partitions/PromptMessage';

interface IndexProps {
  loading: boolean;
}

export const Index: FC<IndexProps> = withLoad({
  category: 'Fable',
  name: 'Create Fable Index',
})(function Create({ loading }) {
  const { t } = useTranslation();

  const { toast } = useUtils();

  const [, subscribe] = usePromptToSubscribe({
    component: PromptToSubscribe,
    dissmissTimeout: 1,
  });

  const { data, isPending, isSuccess, mutate } = useCreateStory();

  const handleOnSubmit = (data: IndexForm) => {
    mutate(
      {
        data,
      },
      {
        onError: ({ statusCode, message }) => {
          if (statusCode === 403) {
            subscribe({
              message: t('intro.subscribe'),
            });
          } else {
            toast({
              message: Array.isArray(message) ? message[0] : message,
              variant: 'error',
            });
          }
        },
      }
    );
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        padding={16}
        paddingInline={20}
      >
        <Spinner />
      </Box>
    );
  }

  if (isSuccess) {
    return (
      <Redirect params={{ id: data?.id }} pathname={RoutePath.CreateDetails} />
    );
  }

  return (
    <Form<IndexForm> defaultValues={{}} onSubmit={handleOnSubmit}>
      <PromtOptions />
      <PromptMessage isPending={isPending} />
    </Form>
  );
});
