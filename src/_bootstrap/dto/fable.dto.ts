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
}

export interface Fable {
  status: FableStatus;
  request: FableRequest;
  response: FableResponse;
}
