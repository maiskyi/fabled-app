import { get, invoke, merge } from 'lodash';
import { useWatch, ControllerProps } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';

import { LocalizationContext } from '../../../../contexts/LocalizationContext';
import { FORM_CONTROL_RULES } from '../../_hooks/useFormControlRules/useFormControlRules.const';

type FormItemRules = ControllerProps['rules'];

interface UseFormControlRulesReturnType {
  rules: FormItemRules;
}

interface UseFormControlRulesParams {
  name: string;
  label?: string;
  validation: object;
  type: keyof typeof FORM_CONTROL_RULES;
  errors: Partial<Record<string, string | string[]>>;
}

export const useFormControlRules = ({
  type,
  name,
  label,
  validation,
  errors: fieldsErrorMessages = {},
}: UseFormControlRulesParams): UseFormControlRulesReturnType => {
  const disabled = !Object.entries(validation).some(
    ([, value]) => typeof value === 'function'
  );

  const values = useWatch({ disabled });

  const form = useContextSelector(LocalizationContext, ({ form: v }) => v);

  const rules: FormItemRules = Object.entries(validation).reduce(
    (res, [key, initialValue]) => {
      const value = (() => {
        if (typeof initialValue === 'function') {
          return initialValue({ values });
        }
        return initialValue;
      })();

      if (typeof value === 'boolean' && !value) {
        return res;
      }

      const message =
        get(fieldsErrorMessages, key) ||
        invoke(form, [type, 'errors', key], { label, name, value });

      const rule = invoke(FORM_CONTROL_RULES, [type, key], {
        message,
        value,
      });

      return merge(res, rule);
    },
    {} as FormItemRules
  );

  return { rules };
};
