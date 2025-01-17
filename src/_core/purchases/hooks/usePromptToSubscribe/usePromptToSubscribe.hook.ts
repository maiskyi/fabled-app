import { useAsyncFn } from 'react-use';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useContextSelector } from 'use-context-selector';

import { useIonModal, useIonViewDidEnter } from '@ionic/react';

import { PurchasesContext } from '../../contexts/PurchasesContext';

import { PromptToSubscribeComponent } from './usePromptToSubscribe.types';
import { DISSMISS_TIMEOUT } from './usePromptToSubscribe.const';

interface UsePromptToSubscribeParams<T extends object> {
  component: PromptToSubscribeComponent<T>;
  auto?: boolean;
}

interface UsePromptToSubscribeState {}

type UsePromptToSubscribeDispatch<T extends object> = (params?: T) => void;

type UsePromptToSubscribeReturnType<T extends object> = [
  UsePromptToSubscribeState,
  UsePromptToSubscribeDispatch<T>,
];

export const usePromptToSubscribe = <T extends object = {}>({
  component,
  auto = false,
}: UsePromptToSubscribeParams<T>): UsePromptToSubscribeReturnType<T> => {
  const [extraModalParams, setExtraModalParams] = useState<T>({} as T);

  const unlocked = useRef(false);

  const promptedToSubscribe = useContextSelector(
    PurchasesContext,
    ({ promptedToSubscribe }) => promptedToSubscribe
  );

  const dissmissPromptToSubscribe = useContextSelector(
    PurchasesContext,
    ({ dissmissPromptToSubscribe }) => dissmissPromptToSubscribe
  );

  const offerings = useContextSelector(
    PurchasesContext,
    ({ offerings }) => offerings
  );

  const introEligibility = useContextSelector(
    PurchasesContext,
    ({ introEligibility }) => introEligibility
  );

  const activeSubscriptions = useContextSelector(
    PurchasesContext,
    ({ activeSubscriptions }) => activeSubscriptions
  );

  const [{ value: canDismiss }, unlock] = useAsyncFn(
    async () => {
      return new Promise<boolean>((resolve) => {
        setTimeout(() => resolve(true), DISSMISS_TIMEOUT);
      });
    },
    [],
    {
      loading: false,
      value: false,
    }
  );

  const hasActiveSubscriptions = !!activeSubscriptions.length;

  unlocked.current = canDismiss;

  const [open, dismiss] = useIonModal(component, {
    ...extraModalParams,
    dismiss: () => {
      if (unlocked.current) {
        dismiss();
        dissmissPromptToSubscribe();
      }
    },
    dissmissTimeout: DISSMISS_TIMEOUT,
    introEligibility,
    offerings,
  });

  const state = useMemo(() => ({}), []);

  const dispatch = useCallback(
    (params: T = {} as T) => {
      setExtraModalParams(params);
      open({
        breakpoints: [0, 1],
        canDismiss: () => Promise.resolve(unlocked.current),
        handle: false,
        initialBreakpoint: 1,
        keyboardClose: false,
        onDidDismiss: () => setExtraModalParams({} as T),
        onDidPresent: unlock,
      });
    },
    [open, unlock]
  );

  useIonViewDidEnter(() => {
    if (auto && !promptedToSubscribe && !hasActiveSubscriptions) dispatch();
  }, [promptedToSubscribe, hasActiveSubscriptions]);

  return [state, dispatch];
};
