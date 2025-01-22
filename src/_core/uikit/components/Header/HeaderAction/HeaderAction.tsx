import { FC } from 'react';

import { IonButton } from '@ionic/react';

import { Icon, IconName } from '../../Icon';

import styles from './HeaderAction.module.scss';

interface HeaderActionProps {
  icon: IconName;
  onClick?: () => void;
}

export const HeaderAction: FC<HeaderActionProps> = ({ icon, onClick }) => {
  return (
    <IonButton
      className={styles.root}
      color="dark"
      onClick={onClick}
      style={{ opacity: 1 }}
    >
      <Icon name={icon} slot="icon-only" />
    </IonButton>
  );
};
