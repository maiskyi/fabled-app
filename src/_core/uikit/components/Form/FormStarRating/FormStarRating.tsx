import { FC } from 'react';

import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { starOutline, star } from 'ionicons/icons';

import { FormControl, FormControlBaseProps } from '../FormControl';

import { FormStarRatingValidation } from './FormText.types';

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
          <IonItem lines="none">
            <IonLabel color={invalid && 'danger'}>{props.label}</IonLabel>
            {Array.from({ length: total }).map((_, index) => {
              const itemValue = index + 1;
              return (
                <IonButton
                  color={invalid && 'danger'}
                  disabled={disabled}
                  fill="clear"
                  key={index}
                  onClick={() => onChange(itemValue)}
                  size="large"
                  slot="end"
                >
                  <IonIcon
                    icon={value >= itemValue ? star : starOutline}
                    slot="icon-only"
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
