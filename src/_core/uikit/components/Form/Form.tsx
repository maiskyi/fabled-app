import {
  forwardRef,
  PropsWithChildren,
  MutableRefObject,
  ReactElement,
  useImperativeHandle,
} from 'react';

import { noop } from 'lodash';
import { FormProvider, useForm } from 'react-hook-form';
import { PartialDeep } from 'type-fest';

// import { FormCheckbox } from './FormCheckbox/FormCheckbox';
// import { FormDatepicker } from './FormDatepicker/FormDatepicker';
// import { FormPassword } from './FormPassword/FormPassword';
// import { FormSection } from './FormSection/FormSection';
import { FormSubmit } from './FormSubmit/FormSubmit';
// import { FormText } from './FormText/FormText';
// import { FormRadioGroup } from './FormRadioGroup/FormRadioGroup';
// import { FormCheckboxGroup } from './FormCheckboxGroup/FormCheckboxGroup';
// import { FormActions } from './FormActions/FormActions';
// import { FormSelect } from './FormSelect/FormSelect';
// import { FormCheckboxToggle } from './FormCheckboxToggle/FormCheckboxToggle';
// import { FormPlain } from './FormPlain/FormPlain';
// import { FormTextarea } from './FormTextarea/FormTextarea';
import { FormInstance } from './Form.types';
import { FormContext } from './Form.context';

export type FormProps<T extends object = {}> = PropsWithChildren<{
  onSubmit?: (v: T) => void;
  defaultValues?: PartialDeep<T>;
  ref?: MutableRefObject<FormInstance>;
}>;

interface FormComponent {
  <T extends object = {}>(props: FormProps<T>, ref: FormInstance): ReactElement;
  //   Checkbox: typeof FormCheckbox;
  //   Datepicker: typeof FormDatepicker;
  //   Password: typeof FormPassword;
  //   Section: typeof FormSection;
  Submit: typeof FormSubmit;
  //   Text: typeof FormText;
  //   RadioGroup: typeof FormRadioGroup;
  //   CheckboxGroup: typeof FormCheckboxGroup;
  //   Actions: typeof FormActions;
  //   Select: typeof FormSelect;
  //   CheckboxToggle: typeof FormCheckboxToggle;
  //   Plain: typeof FormPlain;
  //   Textrea: typeof FormTextarea;
}

export const Form = forwardRef<FormInstance, FormProps>(function Form(
  { children, defaultValues, onSubmit = noop },
  ref
) {
  const methods = useForm({ defaultValues });

  const submit = methods.handleSubmit(onSubmit);

  const hasUnsavedChanges = (() => {
    const value = [
      methods.formState.isDirty && !methods.formState.isSubmitted,
      !!Object.keys(methods.formState.errors).length,
    ].includes(true);
    return () => value;
  })();

  useImperativeHandle(ref, () => ({
    hasUnsavedChanges,
  }));

  return (
    <FormProvider {...methods}>
      <FormContext.Provider value={{ submit }}>{children}</FormContext.Provider>
    </FormProvider>
  );
}) as unknown as FormComponent;

// Form.Checkbox = FormCheckbox;
// Form.Datepicker = FormDatepicker;
// Form.Password = FormPassword;
// Form.Section = FormSection;
Form.Submit = FormSubmit;
// Form.Text = FormText;
// Form.RadioGroup = FormRadioGroup;
// Form.CheckboxGroup = FormCheckboxGroup;
// Form.Actions = FormActions;
// Form.Select = FormSelect;
// Form.CheckboxToggle = FormCheckboxToggle;
// Form.Plain = FormPlain;
// Form.Textrea = FormTextarea;
