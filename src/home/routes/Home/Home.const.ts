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
          request: {
            characterName: '',
            description: '',
            readTime: 0,
            sceneOfAction: '',
            version: '',
          },
          response: {},
          status: DTO.FableStatus.Initialized,
        },
        id: `${index}`,
        path: '',
      })
    ),
  ],
};
