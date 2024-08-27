export type FormInputOptionValue = string | number;

export interface FormInputOptionProps<V extends FormInputOptionValue> {
  value: V;
  label: string;
  note?: string;
  image?: string;
}
