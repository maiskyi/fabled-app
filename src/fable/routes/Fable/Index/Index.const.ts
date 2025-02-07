import { DTO } from '@network/api';

export const CHILD_EMOJI_MAPPING: Record<DTO.ChildGender, string> = {
  [DTO.ChildGender.boy]: '👦',
  [DTO.ChildGender.girl]: '👧',
};
