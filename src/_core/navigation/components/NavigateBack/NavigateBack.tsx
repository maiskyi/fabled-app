import { FC } from 'react';
import { useHistory } from 'react-router';
import { useMount } from 'react-use';

export const NavigateBack: FC = () => {
  const { goBack } = useHistory();

  useMount(goBack);

  return null;
};
