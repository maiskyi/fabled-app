export enum FableStatus {
  Error = 'error',
  Success = 'success',
  Initialized = 'initialized',
  ContentInProgress = 'contentInProgress',
  ImageInProgress = 'imageInProgress',
}

export interface Fable {
  title?: string;
  character: string;
  scene: string;
  description: string;
  readTime: number;
  message: string;
  status: FableStatus;
  image?: {
    public_id: string;
  };
}

export interface CreateFableRequest {
  character: string;
  scene: string;
  description: string;
  readTime: number;
  message: string;
  prompt: string;
}

export interface CreateFableResponse {
  id: string;
  path: string;
}
