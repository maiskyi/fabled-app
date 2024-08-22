import { FC } from 'react';

import {
  FormControlBaseValidation,
  FormItemRuleFunction,
} from '../FormControl/FormControl.types';

export interface FormInlineValidation extends FormControlBaseValidation {}

export interface FormInlineRules {
  inline: Record<keyof FormInlineValidation, FormItemRuleFunction>;
}

export interface FormInlineComponentProps {
  dismiss: () => void;
}

export type FormInlineComponent = FC<FormInlineComponentProps>;
