import { FC, ReactElement } from 'react';
import { Trans } from 'react-i18next';

interface TranslateProps {
  id: string;
  defaultValue?: any;
  values?: Record<string, unknown>;
  defaults?: string;
  components?: Record<string, ReactElement>;
}

export const Translate: FC<TranslateProps> = ({
  id,
  components,
  values,
  defaults,
  defaultValue,
}) => {
  return (
    <Trans
      components={{
        b: <strong />,
        n: <br />,
        ...components,
      }}
      defaultValue={defaultValue}
      defaults={defaults}
      i18nKey={id}
      values={values}
    />
  );
};
