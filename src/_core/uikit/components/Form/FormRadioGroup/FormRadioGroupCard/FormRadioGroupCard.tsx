import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import { isEqual } from 'lodash';

import { IonCheckbox } from '@ionic/react';

import { Card } from '../../../Card';
import { CardThumbProps } from '../../../Card/CardThumb';
import { CardTitleProps } from '../../../Card/CardTitle';
import { FormRadioGroupContext } from '../FormRadioGroup.context';

import styles from './FormRadioGroupCard.module.scss';

interface FormRadioGroupCardProps {
  value: string | number;
  thumb?: CardThumbProps;
  title?: CardTitleProps;
}

export const FormRadioGroupCard: FC<FormRadioGroupCardProps> = ({
  value: internalValue,
  thumb,
  title,
}) => {
  const onChange = useContextSelector(
    FormRadioGroupContext,
    ({ onChange }) => onChange
  );

  const value = useContextSelector(FormRadioGroupContext, ({ value }) => value);

  const invalid = useContextSelector(
    FormRadioGroupContext,
    ({ invalid }) => invalid
  );

  return (
    <Card
      className={styles.root}
      color={invalid && 'danger'}
      onClick={() => onChange(internalValue)}
    >
      {!!thumb && <Card.Thumb {...thumb} />}
      {!!title && (
        <Card.Header>
          {!!title && <Card.Title>{title.children}</Card.Title>}
        </Card.Header>
      )}
      <div className={styles.radio}>
        <IonCheckbox checked={isEqual(value, internalValue)} />
      </div>
    </Card>
  );
};