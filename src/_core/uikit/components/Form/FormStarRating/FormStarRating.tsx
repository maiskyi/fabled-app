import { FC } from 'react';
import classNames from 'classnames';

import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { starOutline, star } from 'ionicons/icons';

import { FormControl, FormControlBaseProps } from '../FormControl';

import { FormStarRatingValidation } from './FormText.types';

import typography from '../../Typography/Typography.module.scss';
import styles from './FormStarRating.module.scss';

interface FormStarRatingProps
  extends FormControlBaseProps<FormStarRatingValidation> {
  total?: number;
}

export const FormStarRating: FC<FormStarRatingProps> = ({
  disabled,
  total = 5,
  ...props
}) => {
  return (
    <FormControl type="starRating" {...props}>
      {({ invalid, onChange, value = 0 }) => {
        return (
          <IonItem className={styles.item} lines="none">
            <IonLabel
              className={classNames(typography.default, typography['body-2'])}
              color={invalid && 'danger'}
            >
              {props.label}
            </IonLabel>
            {Array.from({ length: total }).map((_, index) => {
              const itemValue = index + 1;
              return (
                <IonButton
                  color={invalid ? 'danger' : 'secondary'}
                  disabled={disabled}
                  fill="clear"
                  key={index}
                  onClick={() => onChange(itemValue)}
                  size="small"
                  slot="end"
                >
                  <IonIcon
                    icon={value >= itemValue ? star : starOutline}
                    slot="icon-only"
                    style={{ fontSize: 20 }}
                  />
                </IonButton>
              );
            })}
          </IonItem>
        );
      }}
    </FormControl>
  );
};
