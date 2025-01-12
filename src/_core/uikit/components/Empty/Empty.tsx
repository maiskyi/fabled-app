import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { IonIcon, IonText, IonNote } from '@ionic/react';
import { Color } from '@ionic/core';

import { Box } from '../Box';
import { IconName, ICON } from '../Icon';
import { SvgFunctionComponent } from '../../types';

import styles from './Empty.module.scss';

export type EmptyProps = PropsWithChildren<{
  icon?: IconName;
  Icon?: SvgFunctionComponent;
  title: string;
  description?: string;
  variant?: Color;
}>;

export const Empty: FC<EmptyProps> = ({
  children,
  icon,
  title,
  description,
  variant,
  Icon,
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
        {!!icon && (
          <IonIcon className={styles.icon} color={variant} icon={ICON[icon]} />
        )}
        {!!Icon && (
          <Box aspectRatio={1} width={200}>
            <Icon className={classNames(styles.svg, styles[variant])} />
          </Box>
        )}
      </Box>
      <Box display="flex" flexDirection="column" gap={8}>
        <Box>
          <IonText
            className={classNames(styles.text, styles.title)}
            color={variant}
          >
            {title}
          </IonText>
        </Box>
        {!!description && (
          <Box>
            <IonNote className={classNames(styles.text)}>{description}</IonNote>
          </Box>
        )}
      </Box>
      {!!children && <Box>{children}</Box>}
    </Box>
  );
};
