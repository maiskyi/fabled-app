import { DTO } from '@network/api';

export const SKELETON_INITIAL_DATA: DTO.StoryItem[] = Array.from({
  length: 3,
}).map(
  (): DTO.StoryItem => ({
    id: '',
    image: '',
    readTime: 0,
    title: '',
  })
);
