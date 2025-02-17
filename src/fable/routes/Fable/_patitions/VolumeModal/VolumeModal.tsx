import { Fragment } from 'react';

import {
  ModalComponent,
  Header,
  Content,
  Box,
  Footer,
  Volume,
  Typography,
  Button,
} from '@core/uikit';
import { useTranslation } from '@core/localization';

import { LullabySetVolume } from '../../../../providers/LullabyProvider';

interface VolumeModalProps {
  volume: number;
  setVolume: LullabySetVolume;
}

export const VolumeModal: ModalComponent<VolumeModalProps> = ({
  volume,
  dismiss,
  setVolume,
}) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header collapse="fade">
        <Header.Buttons>
          <Header.Button icon="close-outline" onClick={dismiss}></Header.Button>
        </Header.Buttons>
      </Header>
      <Content />
      <Box paddingInline={20}>
        <Typography variant="body-2">{t('forms.lullabyVolume')}</Typography>
        <Volume onChange={setVolume} value={volume} />
      </Box>
      <Content />
      <Footer>
        <Button onClick={dismiss}>{t('actions.confirm')}</Button>
      </Footer>
    </Fragment>
  );
};
