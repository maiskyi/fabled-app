import { PropsWithChildren, ReactElement } from 'react';

import { Box } from '../Box';

import { BannerSvg } from './BannerSvg/BannerSvg';

export type BannerProps = PropsWithChildren<{}>;

interface BannerComponent {
  (props: BannerProps): ReactElement;
  Svg: typeof BannerSvg;
}

export const Banner: BannerComponent = ({ children }: BannerProps) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap={16}
      paddingInline={20}
    >
      {children}
      {/* <Box>
        {!!icon && (
          <IonIcon className={styles.icon} color={variant} icon={ICON[icon]} />
        )}
        {!!Icon && (
          <Box aspectRatio={1} width={200}>
            <Icon
              className={classNames(
                styles.svg,
                styles.tertiary,
                styles[variant]
              )}
            />
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
      {!!children && <Box>{children}</Box>} */}
    </Box>
  );
};

Banner.Svg = BannerSvg;
