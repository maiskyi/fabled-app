import { FC } from 'react';

import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormInlineValidation extends FormControlBaseValidation {}

export interface FormInlineRules {
  inline: Record<keyof FormInlineValidation, FormItemRuleFunction>;
}

export type FormInlineValue = string | number;

export interface FormInlineComponentProps {
  value: FormInlineValue;
  dismiss: () => void;
  onChange: (value: FormInlineValue) => void;
}

export type FormInlineComponent = FC<FormInlineComponentProps>;
