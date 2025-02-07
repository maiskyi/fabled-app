import { useFormContext } from 'react-hook-form';

export const useForm = () => {
  const { reset } = useFormContext();

  return { reset };
};
