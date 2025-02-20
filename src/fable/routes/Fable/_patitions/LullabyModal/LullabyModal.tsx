import { memo, useRef } from 'react';

import {
  Box,
  Button,
  Card,
  Content,
  Footer,
  Header,
  Modal,
  ModalElement,
  Typography,
} from '@core/uikit';
import { useConfig } from '@bootstrap/providers';
import { useTranslation } from '@core/localization';

import { Setting } from '../../Fable.types';
import { useLullaby } from '../../../../providers/LullabyProvider';

import Wave from './assets/wave.svg?react';
import Play from './assets/play.svg?react';

export const LullabyModal = memo(function LullabyModal() {
  const modal = useRef<ModalElement>();
  const { t } = useTranslation();

  const { lullabies } = useConfig();

  const [{ lullaby }, { setLullaby }] = useLullaby();

  return (
    <Modal ref={modal} trigger={Setting.Lullaby}>
      <Header>
        <Header.Title>{t('forms.lullabyMelody')}</Header.Title>
        <Header.Buttons slot="end">
          <Header.Button icon="x" onClick={() => modal.current?.dismiss()} />
        </Header.Buttons>
      </Header>
      <Content>
        <Box display="flex" flexDirection="column">
          {lullabies.map(({ id, title, tags }) => {
            const active = lullaby === id;

            return (
              <Card
                key={id}
                onClick={() => setLullaby({ value: id })}
                outline={active}
              >
                <Card.Content>
                  <Box alignItems="center" display="flex" gap={8}>
                    <Box display="flex" flex={1} flexDirection="column" gap={4}>
                      <Typography
                        color={active ? 'secondary' : 'dark'}
                        variant="body-2"
                        weight="medium"
                      >
                        {title}
                      </Typography>
                      <Box display="flex" gap={8}>
                        {tags.map((text, index) => {
                          return (
                            <Typography
                              key={`${text}${index}`}
                              muted
                              variant="body-3"
                            >
                              {`#${text}`}
                            </Typography>
                          );
                        })}
                      </Box>
                    </Box>
                    <Box alignItems="center" display="flex" flex={0} gap={8}>
                      <Wave fill={active ? '#F9F9F9' : '#737373'} height={16} />
                      <Play fill={active ? '#F58E2E' : '#F9F9F9'} height={24} />
                    </Box>
                  </Box>
                </Card.Content>
              </Card>
            );
          })}
        </Box>
      </Content>
      <Footer>
        <Button onClick={() => modal.current?.dismiss()}>
          {t('actions.confirm')}
        </Button>
      </Footer>
    </Modal>
  );
});
