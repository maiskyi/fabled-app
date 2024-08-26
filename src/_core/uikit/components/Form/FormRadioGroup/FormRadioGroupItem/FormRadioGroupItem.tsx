import { FC } from 'react';

import { IonItem, IonLabel, IonNote, IonRadio } from '@ionic/react';

import { FormRadioGroupValue } from '../FormRadioGroup.types';

interface FormRadioGroupItemProps {
  label?: string;
  description?: string;
  value: FormRadioGroupValue;
}

export const FormRadioGroupItem: FC<FormRadioGroupItemProps> = ({
  value,
  label,
  description,
}) => {
  return (
    <IonItem>
      <IonRadio justify="start" labelPlacement="end" mode="md" value={value}>
        <IonLabel className="ion-text-wrap">
          <strong>{label}</strong>
          {!!description && <br />}
          {!!description && <IonNote>{description}</IonNote>}
        </IonLabel>
      </IonRadio>
    </IonItem>
  );
};
