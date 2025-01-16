import { useAsyncFn } from 'react-use';
import { useCallback, useMemo, useRef } from 'react';
import { useContextSelector } from 'use-context-selector';

import { useIonModal, useIonViewDidEnter } from '@ionic/react';

import { PurchasesContext } from '../../contexts/PurchasesContext';

import { PromptToSubscribeComponent } from './usePromptToSubscribe.types';
import { DISSMISS_TIMEOUT } from './usePromptToSubscribe.const';

interface UsePromptToSubscribeParams {
  component: PromptToSubscribeComponent;
  auto?: boolean;
}

interface UsePromptToSubscribeState {}

type UsePromptToSubscribeDispatch = () => void;

type UsePromptToSubscribeReturnType = [
  UsePromptToSubscribeState,
  UsePromptToSubscribeDispatch,
];

export const usePromptToSubscribe = ({
  component,
  auto = false,
}: UsePromptToSubscribeParams): UsePromptToSubscribeReturnType => {
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

  useIonViewDidEnter(() => {
    if (auto && !promptedToSubscribe && !hasActiveSubscriptions) dispatch();
  }, [promptedToSubscribe, hasActiveSubscriptions]);

  return [state, dispatch];
};
