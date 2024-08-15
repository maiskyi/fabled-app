import { memo } from 'react';
import { useAsyncFn } from 'react-use';

import { IonIcon } from '@ionic/react';

import { ConfirmVariant } from '../../useUtils.types';
import { Box } from '../../../../components/Box';
import { Text } from '../../../../components/Text';
import { Button } from '../../../../components/Button';
import { IconName, ICON } from '../../../../components/Icon';

export interface ConfirmModalParams {
  title: string;
  message: string;
  variant: ConfirmVariant;
  confirmBtn?: string;
  cancelBtn?: string;
  dismiss: () => void;
  onConfirm: () => Promise<unknown>;
  icon: IconName;
}

export const ConfirmModal = memo<ConfirmModalParams>(function ConfirmModal({
  icon,
  title,
  dismiss,
  message,
  variant,
  confirmBtn = 'OK',
  cancelBtn = 'Cancel',
  onConfirm,
}: ConfirmModalParams) {
  const [{ loading }, dispatch] = useAsyncFn(() => {
    return onConfirm();
  });

  const handleOnConfirm = async () => {
    await dispatch();
    dismiss();
  };

  return (
    <Box paddingBottom="var(--ion-safe-area-bottom)">
      <Box display="flex" gap={8} paddingInline={20} paddingTop={24}>
        <Box flex={0} paddingTop={4}>
          <IonIcon color={variant} icon={ICON[icon]} size="large" />
        </Box>
        <Box flex={1} fontSize="min(2.125rem, 61.2px)" fontWeight="bold">
          <Text>{title}</Text>
        </Box>
      </Box>
      <Box display="flex" padding={16} paddingInline={20}>
        <Box flex={1}>
          <Text>{message}</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        gap={16}
        padding={16}
        paddingInline={20}
        paddingTop={0}
      >
        <Box flex={1}>
          <Button color={variant} fill="outline" onClick={dismiss}>
            {cancelBtn}
          </Button>
        </Box>
        <Box flex={1}>
          <Button
            color={variant}
            fill="solid"
            loading={loading}
            onClick={handleOnConfirm}
          >
            {confirmBtn}
          </Button>
        </Box>
      </Box>
    </Box>
  );
});
