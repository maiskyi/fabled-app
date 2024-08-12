import { FC, ReactElement } from 'react';
import { Trans } from 'react-i18next';

interface TranslateProps {
  id: string;
  values?: Record<string, unknown>;
  components?: Record<string, ReactElement>;
}

export const Translate: FC<TranslateProps> = ({ id, components, values }) => {
  return (
    <Trans
      values={values}
      i18nKey={id}
      components={{
        b: <strong />,
        ...components,
      }}
    />
  );
};
