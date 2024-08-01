export enum FableStatus {
  Error = 'error',
  Success = 'success',
  Initialized = 'initialized',
  ContentInProgress = 'contentInProgress',
}

export interface FableRequest {
  characterName: string;
  readTime: number;
  sceneOfAction: string;
  description: string;
}

export interface Fable {
  status: FableStatus;
  request: FableRequest;
}
