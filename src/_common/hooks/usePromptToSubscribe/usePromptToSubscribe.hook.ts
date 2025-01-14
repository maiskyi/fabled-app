import { useCallback, useMemo, useRef } from 'react';
import { useAsyncFn } from 'react-use';

import { useModal } from '@core/uikit';

import { UsePromptToSubscribe } from './UsePromptToSubscribe';

interface UsePromptToSubscribeState {}

type UsePromptToSubscribeDispatch = () => void;

type UsePromptToSubscribeReturnType = [
  UsePromptToSubscribeState,
  UsePromptToSubscribeDispatch,
];

export const usePromptToSubscribe = (): UsePromptToSubscribeReturnType => {
  const unlocked = useRef(false);

  const [{ value: canDismiss }, unlock] = useAsyncFn(
    async () => {
      return new Promise<boolean>((resolve) => {
        setTimeout(() => resolve(true), 5000);
      });
    },
    [],
    {
      loading: false,
      value: false,
    }
  );

  unlocked.current = canDismiss;

  const [open, dismiss] = useModal(UsePromptToSubscribe, {
    dismiss: (data: string, role: string) => dismiss(data, role),
  });

  const state = useMemo(() => ({}), []);

  const dispatch = useCallback(() => {
    open({
      breakpoints: [0, 1],
      canDismiss: () => Promise.resolve(unlocked.current),
      handle: false,
      initialBreakpoint: 1,
      keyboardClose: false,
      onDidPresent: unlock,
    });
  }, [open, unlock]);

  return [state, dispatch];
};
