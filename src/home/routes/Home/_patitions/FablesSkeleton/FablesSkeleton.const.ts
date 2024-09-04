import { DTO } from '@bootstrap/dto';

export const SKELETON_INITIAL_DATA: DTO.Fable[] = Array.from({
  length: 3,
}).map(
  (): DTO.Fable => ({
    character: '',
    description: '',
    image: {
      public_id: undefined,
    },
    message: '',
    readTime: 0,
    scene: '',
    status: [],
    title: '',
  })
);
