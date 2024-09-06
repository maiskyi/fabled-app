import { Timestamp } from 'firebase/firestore';

export enum FableStatus {
  Error = 'error',
  Success = 'success',
  Initialized = 'initialized',
  ContentInProgress = 'contentInProgress',
  ImageInProgress = 'imageInProgress',
}

export interface Fable {
  uid: string;
  title?: string;
  character: string;
  scene: string;
  description: string;
  readTime: number;
  message: string;
  status: FableStatus[];
  content?: string[];
  image?: {
    public_id: string;
  };
  createdAt: Timestamp;
}

export interface CreateFableRequest {
  character: string;
  scene: string;
  description: string;
  readTime: number;
  message: string;
  prompt: {
    content: string;
    image: string;
  };
}

export interface CreateFableResponse {
  id: string;
  path: string;
}
