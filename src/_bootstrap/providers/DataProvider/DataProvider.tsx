import { FC, PropsWithChildren, ReactNode } from 'react';

import { useGetBootstrapQuery } from '@network/contentful';

import { DataProviderContext } from './DataProviderProps.context';

export type DataProviderProps = PropsWithChildren<{
  fallback: ReactNode;
}>;

export const DataProvider: FC<DataProviderProps> = ({
  children,
  fallback = null,
}) => {
  const { data, isSuccess } = useGetBootstrapQuery(
    {},
    {
      initialData: {
        characterCollection: {
          items: [],
        },
      },
    }
  );

  return (
    <DataProviderContext.Provider
      value={{
        characters: data.characterCollection.items,
      }}
    >
      {isSuccess ? children : fallback}
    </DataProviderContext.Provider>
  );
};
