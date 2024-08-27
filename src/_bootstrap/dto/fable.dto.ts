export enum FableStatus {
  Error = 'error',
  Success = 'success',
  Initialized = 'initialized',
  Content = 'content',
  Image = 'image',
}

export interface FableRequest {
  characterName: string;
  readTime: number;
  sceneOfAction: string;
  description: string;
  version: string;
}

export interface FableResponse {
  illustration?: string;
  title?: string;
  content?: string;
}

export interface Fable {
  status: FableStatus;
  request: FableRequest;
  response: FableResponse;
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
