import { useConfig } from '@bootstrap/providers';

import { FormField } from './Create.const';

export const useCreate = () => {
  const { version } = useConfig();

  const initialValue = {
    [FormField.CharacterName]: 'mickey mouse',
    [FormField.ReadTime]: 5,
    [FormField.SceneOfAction]: 'magic forest',
    [FormField.WhatIsThisFableAbout]: 'how to build a friendship',
    [FormField.Version]: version,
  };

  return { initialValue };
};
