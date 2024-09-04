import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonIcon, IonText, IonNote } from '@ionic/react';

import { Box } from '../Box';
import { IconName, ICON } from '../Icon';

import styles from './Empty.module.scss';

export type EmptyProps = PropsWithChildren<{
  icon: IconName;
  title: string;
  description: string;
}>;

export const Empty: FC<EmptyProps> = ({
  children,
  icon,
  title,
  description,
}) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap={16}
      paddingInline={20}
    >
      <Box>
        <IonIcon className={styles.icon} icon={ICON[icon]} />
      </Box>
      <Box display="flex" flexDirection="column" gap={8}>
        <Box>
          <IonText className={classNames(styles.text, styles.title)}>
            {title}
          </IonText>
        </Box>
        <Box>
          <IonNote className={classNames(styles.text)}>{description}</IonNote>
        </Box>
      </Box>
      {!!children && <Box>{children}</Box>}
    </Box>
  );
};
