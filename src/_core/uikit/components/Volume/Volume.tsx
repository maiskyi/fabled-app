import { FC, memo } from 'react';
import { noop } from 'lodash';

import { IonButton, IonIcon, IonRange } from '@ionic/react';
import { IonRangeCustomEvent, RangeChangeEventDetail } from '@ionic/core';

import { ICON } from '../Icon';

import { VolumeOnChangeParams } from './Volume.types';
import { INCREMENT } from './Volume.const';

export interface VolumeProps {
  value?: number;
  onChange?: ({ value }: VolumeOnChangeParams) => void;
}

export const Volume: FC<VolumeProps> = memo(function Volume({
  value = 2,
  onChange = noop,
}) {
  const handleOnInput = ({
    detail: { value },
  }: IonRangeCustomEvent<RangeChangeEventDetail>) => {
    onChange({ value });
  };

  const handleOnPlus = () => {
    const rest = value % INCREMENT;
    const diff = INCREMENT - rest;
    onChange({ value: value + diff });
  };

  const handleOnMinus = () => {
    const rest = value % INCREMENT;
    onChange({ value: value - rest });
  };

  return (
    <IonRange
      color="secondary"
      max={100}
      min={0}
      mode="md"
      onIonInput={handleOnInput}
      value={value}
    >
      <IonButton
        color="dark"
        fill="clear"
        onClick={handleOnMinus}
        shape="round"
        slot="start"
      >
        <IonIcon icon={ICON['volume-1']} slot="icon-only" />
      </IonButton>
      <IonButton
        color="dark"
        fill="clear"
        onClick={handleOnPlus}
        shape="round"
        slot="end"
      >
        <IonIcon icon={ICON['volume-2']} slot="icon-only" />
      </IonButton>
    </IonRange>
  );
});
