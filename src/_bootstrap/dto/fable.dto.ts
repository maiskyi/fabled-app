export interface FableRequest {
  characterName: string;
  readTime: number;
  sceneOfAction: string;
  description: string;
}

export interface Fable {
  request: FableRequest;
}
