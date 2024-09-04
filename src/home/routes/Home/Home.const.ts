import { DTO } from '@bootstrap/dto';
import { DocumentSnapshot, InfiniteData } from '@core/firestore';

export const HOME_INITIAL_DATA: InfiniteData<
  DocumentSnapshot<DTO.Fable>[],
  string
> = {
  pageParams: [],
  pages: [
    Array.from({
      length: 3,
    }).map(
      (_, index): DocumentSnapshot<DTO.Fable> => ({
        data: {
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
        },
        id: `${index}`,
        path: '',
      })
    ),
  ],
};
