/* eslint-disable no-redeclare */
// @ts-nocheck

/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * Fabled API
 * Fabled API Documentation
 * OpenAPI spec version: 1.0
 */
export type GetStoryParams = {
  image?: ImageTransformationQuery;
};

export type GetStoriesStatus =
  (typeof GetStoriesStatus)[keyof typeof GetStoriesStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetStoriesStatus = {
  failed: 'failed',
  inprogress: 'inprogress',
  success: 'success',
} as const;

export type GetStoriesParams = {
  skip?: number;
  take?: number;
  status?: GetStoriesStatus;
  image?: ImageTransformationQuery;
};

export type GetBootstrapParams = {
  image?: ImageTransformationQuery;
};

export interface CreateFeedbackResponse {
  id: string;
}

export interface CreateFeedbackRequest {
  comment: string;
  email?: string;
  rating: number;
}

export interface CreateInquiryRequest {
  email: string;
  message: string;
  subject: string;
}

export type StoryStatusLogItem =
  (typeof StoryStatusLogItem)[keyof typeof StoryStatusLogItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StoryStatusLogItem = {
  contentInProgress: 'contentInProgress',
  createStoryRequestFailed: 'createStoryRequestFailed',
  imageInProgress: 'imageInProgress',
  initialized: 'initialized',
  storyContentGenerationFailed: 'storyContentGenerationFailed',
  storyContentGenerationFailedWithNoResult:
    'storyContentGenerationFailedWithNoResult',
  storyGenerationFailed: 'storyGenerationFailed',
  storyImageGenerationFailed: 'storyImageGenerationFailed',
  storyImageGenerationFailedWithNoResult:
    'storyImageGenerationFailedWithNoResult',
  storyImageUploadFailed: 'storyImageUploadFailed',
  storyImageUploadingToCloudinaryFailed:
    'storyImageUploadingToCloudinaryFailed',
  success: 'success',
} as const;

export type StoryStatus = (typeof StoryStatus)[keyof typeof StoryStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const StoryStatus = {
  failed: 'failed',
  inprogress: 'inprogress',
  success: 'success',
} as const;

export interface StoryPrompt {
  id: string;
}

export interface StoryPlaceOfEvent {
  emoji: string;
  id: string;
  title: string;
}

export interface StoryMoralLesson {
  emoji: string;
  id: string;
  title: string;
}

export interface StoryCharacter {
  emoji: string;
  id: string;
  title: string;
}

export interface Story {
  character: StoryCharacter;
  content: string;
  createdAt: string;
  id: string;
  image?: string;
  message: string;
  moralLesson: StoryMoralLesson;
  placeOfEvent: StoryPlaceOfEvent;
  prompt: StoryPrompt;
  readTime: number;
  status: StoryStatus;
  statusLog: StoryStatusLogItem[];
  title: string;
}

export type HttpExceptionResponseMessage = string | string[];

export interface HttpExceptionResponse {
  error: string;
  message: HttpExceptionResponseMessage;
  statusCode: number;
}

export interface CreateStoryResponse {
  id: string;
}

export interface CreateStoryRequest {
  characterId?: string;
  moralLessonId: string;
  placeOfEventId: string;
  promptId: string;
  readTime: number;
}

export interface StoryItem {
  id: string;
  image: string;
  readTime: number;
  title: string;
}

export interface Stories {
  data: StoryItem[];
  total: number;
}

export interface BootstrapConfig {
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
}

export interface BootstrapPromptItem {
  id: string;
  message: string;
  title: string;
}

export interface BootstrapPlaceOfEventPrompt {
  id: string;
}

export interface BootstrapPlaceOfEventItem {
  id: string;
  image: string;
  prompt: BootstrapPlaceOfEventPrompt;
  title: string;
}

export interface BootstrapCharacterItem {
  id: string;
  image: string;
  title: string;
}

export interface BootstrapMoralLessonsItem {
  description: string;
  id: string;
  title: string;
}

export interface BootstrapResponse {
  characters: BootstrapCharacterItem[];
  config: BootstrapConfig;
  moralLessons: BootstrapMoralLessonsItem[];
  placeOfEvents: BootstrapPlaceOfEventItem[];
  prompts: BootstrapPromptItem[];
}

export type ImageTransformationQueryCrop =
  (typeof ImageTransformationQueryCrop)[keyof typeof ImageTransformationQueryCrop];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ImageTransformationQueryCrop = {
  crop: 'crop',
  fill: 'fill',
  fit: 'fit',
  imagga_crop: 'imagga_crop',
  imagga_scale: 'imagga_scale',
  lfill: 'lfill',
  limit: 'limit',
  lpad: 'lpad',
  mfit: 'mfit',
  mpad: 'mpad',
  pad: 'pad',
  scale: 'scale',
  thumb: 'thumb',
} as const;

export type ImageTransformationQueryAspectRatio =
  (typeof ImageTransformationQueryAspectRatio)[keyof typeof ImageTransformationQueryAspectRatio];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ImageTransformationQueryAspectRatio = {
  '16:9': '16:9',
  '1:1': '1:1',
  '3:1': '3:1',
  '3:2': '3:2',
  '4:3': '4:3',
  '59:44': '59:44',
  '5:4': '5:4',
} as const;

export interface ImageTransformationQuery {
  aspectRatio?: ImageTransformationQueryAspectRatio;
  crop?: ImageTransformationQueryCrop;
  height?: number;
  width?: number;
}

export interface GetDatabaseUrlResponse {
  url: string;
}
