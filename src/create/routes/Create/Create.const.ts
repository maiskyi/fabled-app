export enum FormField {
  CharacterName = 'characterName',
  ReadTime = 'readTime',
  SceneOfAction = 'sceneOfAction',
  WhatIsThisFableAbout = 'description',
}

export const initialValue = {
  [FormField.CharacterName]: 'mickey mouse',
  [FormField.ReadTime]: 5,
  [FormField.SceneOfAction]: 'magic forest',
  [FormField.WhatIsThisFableAbout]: 'how to build a friendship',
};
