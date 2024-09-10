import { FC, PropsWithChildren, useMemo, useRef } from 'react';

import {
  useGetCollectionInfinite,
  UseGetCollectionInfiniteEveryParams,
  UseGetCollectionInfiniteOrderParams,
  useCollectionSnapshotListener,
} from '@core/firestore';
import { DTO } from '@bootstrap/dto';
import { Document } from '@bootstrap/constants';
import { useUser } from '@common/hooks';

import { FablesProviderContext } from './FablesProvider.context';

type FablesProviderProps = PropsWithChildren<{}>;

export const FablesProvider: FC<FablesProviderProps> = ({ children }) => {
  const { uid } = useUser();

  const { current: every } = useRef<
    UseGetCollectionInfiniteEveryParams<DTO.Fable>[]
  >([
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
  ]);

  const { current: order } = useRef<
    UseGetCollectionInfiniteOrderParams<DTO.Fable>
  >({
    direction: 'desc',
    field: 'createdAt',
  });

  const { isLoading, hasNextPage, fetchNextPage, data, refetch } =
    useGetCollectionInfinite<DTO.Fable>({
      doc: Document.Fable,
      every,
      order,
    });

  const contextValue = useMemo(
    () => ({ data, fetchNextPage, hasNextPage, isLoading }),
    [isLoading, hasNextPage, fetchNextPage, data]
  );

  useCollectionSnapshotListener(
    {
      doc: Document.Fable,
      every,
      order,
    },
    () => {
      refetch();
    }
  );

  return (
    <FablesProviderContext.Provider value={contextValue}>
      {children}
    </FablesProviderContext.Provider>
  );
};
