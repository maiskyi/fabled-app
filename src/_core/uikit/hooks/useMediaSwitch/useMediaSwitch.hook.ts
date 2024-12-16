import { get, has } from 'lodash';
import { useMediaQuery } from 'react-responsive';

type UseMediaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface UseMediaSwitchReturnType<T extends unknown> {
  value: T;
}

type UseMediaSwitchParams<T extends unknown> = Partial<Record<UseMediaSize, T>>;

export const useMediaSwitch = <T extends unknown>(
  params: UseMediaSwitchParams<T>
): UseMediaSwitchReturnType<T> => {
  const xs = useMediaQuery({ minWidth: 0 });
  const sm = useMediaQuery({ minWidth: 576 });
  const md = useMediaQuery({ minWidth: 768 });
  const lg = useMediaQuery({ minWidth: 992 });
  const xl = useMediaQuery({ minWidth: 1140 });

  const media = [{ xl }, { lg }, { md }, { sm }, { xs }]
    .map((item) => {
      const [[key, value]] = Object.entries(item);
      return { key, value };
    })
    .find(({ key, value }) => value && has(params, key));

  return { value: get(params, [media?.key]) };
};
