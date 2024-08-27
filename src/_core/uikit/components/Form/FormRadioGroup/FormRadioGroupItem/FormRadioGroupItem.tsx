/* eslint-disable react/prop-types */
import { ReactElement } from 'react';

import { IonItem, IonLabel, IonNote, IonRadio } from '@ionic/react';

import { FormInputOptionProps, FormInputOptionValue } from '../../../../types';

interface FormRadioGroupItemProps<V extends FormInputOptionValue>
  extends FormInputOptionProps<V> {}

interface FormRadioGroupItemComponent {
  <V extends FormInputOptionValue>(
    props: FormRadioGroupItemProps<V>
  ): ReactElement;
}

export const FormRadioGroupItem: FormRadioGroupItemComponent = ({
  value,
  label,
  note,
}) => {
  return (
    <IonItem>
      <IonRadio justify="start" labelPlacement="end" mode="md" value={value}>
        <IonLabel className="ion-text-wrap">
          <strong>{label}</strong>
          {!!note && <br />}
          {!!note && <IonNote>{note}</IonNote>}
        </IonLabel>
      </IonRadio>
    </IonItem>
  );
};
