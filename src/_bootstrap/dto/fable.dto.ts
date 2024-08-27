export enum FableStatus {
  Error = 'error',
  Success = 'success',
  Initialized = 'initialized',
  Content = 'content',
  Image = 'image',
}

export interface Fable {
  character: string;
  scene: string;
  description: string;
  readTime: number;
  message: string;
  status: FableStatus[];
}

export interface CreateFableRequest {
  character: string;
  scene: string;
  description: string;
  readTime: number;
  message: string;
}

export interface CreateFableResponse {
  id: string;
  path: string;
}
