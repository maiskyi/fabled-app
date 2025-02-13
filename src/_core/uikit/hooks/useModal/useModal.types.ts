import { FC } from 'react';

interface ModalComponentProps {
  dismiss: () => void;
}

export type ModalComponent<T extends object = {}> = FC<ModalComponentProps & T>;
