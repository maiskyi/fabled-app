import { DTO } from '@network/api';

export const SKELETON_INITIAL_DATA: DTO.GetUserStories['stories'] = Array.from({
  length: 3,
}).map((): DTO.GetUserStories['stories']['0'] => ({
  id: '',
  image: {
    id: '',
  },
  readTime: 0,
  title: '',
}));
