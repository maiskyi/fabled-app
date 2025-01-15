import { useAsyncFn } from 'react-use';
import { useCallback, useMemo, useRef } from 'react';

import { useIonModal } from '@ionic/react';

import { PromptToSubscribeComponent } from './usePromptToSubscribe.types';

interface UsePromptToSubscribeParams {
  component: PromptToSubscribeComponent;
}

interface UsePromptToSubscribeState {}

type UsePromptToSubscribeDispatch = () => void;

type UsePromptToSubscribeReturnType = [
  UsePromptToSubscribeState,
  UsePromptToSubscribeDispatch,
];

export const usePromptToSubscribe = ({
  component,
}: UsePromptToSubscribeParams): UsePromptToSubscribeReturnType => {
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

  const [open, dismiss] = useIonModal(component, {
    dismiss: () => dismiss(),
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
