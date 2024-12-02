import { DTO } from '@network/api';

export const SKELETON_INITIAL_DATA: DTO.StoryItem[] = Array.from({
  length: 6,
}).map(
  (): DTO.StoryItem => ({
    id: '',
    image: '',
    readTime: 0,
    title: '',
  })
);
