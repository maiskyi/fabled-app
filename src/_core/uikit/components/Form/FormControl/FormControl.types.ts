import { ReactElement, ComponentProps } from 'react';
import { ControllerProps, FieldError } from 'react-hook-form';

import { IonInput } from '@ionic/react';

import { FORM_CONTROL_RULES } from '../_hooks/useFormControlRules/useFormControlRules.const';

export interface FormControlHelpFnParams<V> {
  value: V;
}

export type FormControlHelpFn<V> = (
  params: FormControlHelpFnParams<V>
) => string;

export type FormControlVariant = 'default' | 'inline' | 'list';

export interface FormControlChildrenParams {
  value: any;
  help?: string;
  invalid: boolean;
  error?: FieldError;
  onBlur: () => void;
  onChange: (...event: any[]) => void;
}

export type FormControlChildren = (
  params: FormControlChildrenParams
) => ReactElement;

export interface FormControlBaseValidationFnParams {
  values: object;
}

export type FormControlBaseValidationFn<T> = (
  params: FormControlBaseValidationFnParams
) => T;

export interface FormControlBaseValidation {
  required?: boolean | FormControlBaseValidationFn<boolean>;
}

export interface FormControlBaseProps<
  TValidation extends FormControlBaseValidation,
  TValue = string,
> {
  name: string;
  label?: string;
  tabIndex?: number;
  disabled?: boolean;
  autofocus?: boolean;
  help?: string | string[] | FormControlHelpFn<TValue>;
  validation?: TValidation;
  onChange?: (value: TValue) => void;
  enterKeyHint?: ComponentProps<typeof IonInput>['enterkeyhint'];
  errors?: Partial<Record<keyof TValidation, string | string[]>>;
}

interface FormControlRuleFunctionParams {
  message: string;
  value: any;
}

export type FormItemRuleFunction = (
  params: FormControlRuleFunctionParams
) => ControllerProps['rules'];

export type FormControlType = keyof typeof FORM_CONTROL_RULES;
