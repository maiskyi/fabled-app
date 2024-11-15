// @ts-nocheck

/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * Fabled API
 * Fabled API Documentation
 * OpenAPI spec version: 1.0
 */
export type GetStoriesStatus =
  (typeof GetStoriesStatus)[keyof typeof GetStoriesStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetStoriesStatus = {
  inprogress: "inprogress",
  success: "success",
  failed: "failed",
} as const;

export type GetStoriesParams = {
  status?: GetStoriesStatus;
  take?: number;
  skip?: number;
};

export interface StoryImage {
  publicId: string;
}

export interface Story {
  content: string;
  id: string;
  image: StoryImage;
  readTime: number;
  title: string;
}

export interface StoriesItem {
  id: string;
  image: StoryImage;
  readTime: number;
  title: string;
}

export interface Stories {
  data: StoriesItem[];
  total: number;
}

export interface Config {
  privacyPolicyUrl: string;
  termsAndConditionsUrl: string;
}

export interface MoralLessonsItem {
  description: string;
  id: string;
  title: string;
}

export interface Bootstrap {
  config: Config;
  moralLessons: MoralLessonsItem[];
}
