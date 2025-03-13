import { memo } from 'react';
import { useAsyncFn } from 'react-use';

import { IonIcon } from '@ionic/react';

import { ConfirmVariant } from '../../useUtils.types';
import { Box } from '../../../../components/Box';
import { Button } from '../../../../components/Button';
import { IconName, ICON } from '../../../../components/Icon';
import { Typography } from '../../../../components/Typography';

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
        <Box flex={0} paddingTop={1}>
          <IonIcon color={variant} icon={ICON[icon]} size="large" />
        </Box>
        <Box flex={1}>
          <Typography variant="h3" weight="semi-bold">
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" padding={16} paddingInline={20}>
        <Box flex={1}>
          <Typography variant="body-2">{message}</Typography>
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
