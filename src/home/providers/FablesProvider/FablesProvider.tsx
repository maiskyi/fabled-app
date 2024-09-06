import { FC, PropsWithChildren, useMemo } from 'react';

import { useGetCollectionInfinite } from '@core/firestore';
import { DTO } from '@bootstrap/dto';
import { Document } from '@bootstrap/constants';
import { useUser } from '@common/hooks';

import { FablesProviderContext } from './FablesProvider.context';

type FablesProviderProps = PropsWithChildren<{}>;

export const FablesProvider: FC<FablesProviderProps> = ({ children }) => {
  const { uid } = useUser();

  const { isLoading, hasNextPage, fetchNextPage, data } =
    useGetCollectionInfinite<DTO.Fable>({
      doc: Document.Fable,
      every: [
        {
          fieldPath: 'status',
          opStr: 'array-contains',
          type: 'where',
          value: DTO.FableStatus.Success,
        },
        {
          fieldPath: 'uid',
          opStr: '==',
          type: 'where',
          value: uid,
        },
      ],
      order: {
        direction: 'desc',
        field: 'createdAt',
      },
    });

  const contextValue = useMemo(
    () => ({ data, fetchNextPage, hasNextPage, isLoading }),
    [isLoading, hasNextPage, fetchNextPage, data]
  );

  return (
    <FablesProviderContext.Provider value={contextValue}>
      {children}
    </FablesProviderContext.Provider>
  );
};
