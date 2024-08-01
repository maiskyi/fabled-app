import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const useRoute = <P extends object = {}>() => {
  const params = useParams<P>();

  return useMemo(() => [{ params }], [params]);
};
