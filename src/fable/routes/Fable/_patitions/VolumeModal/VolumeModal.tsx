import { memo, useRef } from 'react';

import {
  Header,
  Content,
  Box,
  Footer,
  Volume,
  Typography,
  Button,
  Modal,
  ModalElement,
} from '@core/uikit';
import { useTranslation } from '@core/localization';

import { useLullaby } from '../../../../providers/LullabyProvider';
import { Setting } from '../../Fable.types';

export const VolumeModal = memo(function VolumeModal() {
  const modal = useRef<ModalElement>();

  const [{ volume }, { setVolume }] = useLullaby();

  const { t } = useTranslation();

  return (
    <Modal height="auto" ref={modal} trigger={Setting.Volume}>
      <Header collapse="fade">
        <Header.Buttons>
          <Header.Button
            icon="close-outline"
            onClick={() => modal.current?.dismiss()}
          ></Header.Button>
        </Header.Buttons>
      </Header>
      <Content />
      <Box paddingInline={20}>
        <Typography variant="body-2">{t('forms.lullabyVolume')}</Typography>
        <Volume onChange={setVolume} value={volume} />
      </Box>
      <Content />
      <Footer>
        <Button onClick={() => modal.current?.dismiss()}>
          {t('actions.confirm')}
        </Button>
      </Footer>
    </Modal>
  );
});
