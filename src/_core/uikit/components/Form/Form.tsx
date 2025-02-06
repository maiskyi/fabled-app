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

import { FormPassword } from './FormPassword/FormPassword';
import { FormSubmit } from './FormSubmit/FormSubmit';
import { FormText } from './FormText/FormText';
import { FormRadioGroup } from './FormRadioGroup/FormRadioGroup';
import { FormSelect } from './FormSelect/FormSelect';
import { FormSlide } from './FormSlide/FormSlide';
import { FormTextarea } from './FormTextarea/FormTextarea';
import { FormStarRating } from './FormStarRating/FormStarRating';
import { FormPicker } from './FormPicker/FormPicker';
import { FormInstance, FormSetErrors } from './Form.types';
import { FormContext } from './Form.context';

export type FormProps<T extends object = {}> = PropsWithChildren<{
  onSubmit?: (v: T) => void;
  defaultValues?: PartialDeep<T>;
  ref?: MutableRefObject<FormInstance<T>>;
}>;

interface FormComponent {
  <T extends object = {}>(
    props: FormProps<T>,
    ref: FormInstance<T>
  ): ReactElement;
  Password: typeof FormPassword;
  Submit: typeof FormSubmit;
  Text: typeof FormText;
  RadioGroup: typeof FormRadioGroup;
  Select: typeof FormSelect;
  Textarea: typeof FormTextarea;
  StarRating: typeof FormStarRating;
  Picker: typeof FormPicker;
  Slide: typeof FormSlide;
}

export const Form = forwardRef<FormInstance<{}>, FormProps>(function Form(
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

  const setErrors: FormSetErrors<{}> = (params) => {
    Object.entries(params).forEach(([key, message]) => {
      methods.setError(key as any, {
        message: message as string,
      });
    });
  };

  useImperativeHandle(ref, () => ({
    hasUnsavedChanges,
    setErrors,
  }));

  return (
    <FormProvider {...methods}>
      <FormContext.Provider value={{ submit }}>{children}</FormContext.Provider>
    </FormProvider>
  );
}) as unknown as FormComponent;

Form.Password = FormPassword;
Form.Submit = FormSubmit;
Form.Text = FormText;
Form.RadioGroup = FormRadioGroup;
Form.Select = FormSelect;
Form.Textarea = FormTextarea;
Form.StarRating = FormStarRating;
Form.Picker = FormPicker;
Form.Slide = FormSlide;
