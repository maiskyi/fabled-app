import { DTO } from '@network/api';

export const SKELETON_INITIAL_DATA: DTO.StoriesItem[] = Array.from({
  length: 3,
}).map(
  (): DTO.StoriesItem => ({
    id: '',
    image: {
      publicId: '',
    },
    readTime: 0,
    title: '',
  })
);
