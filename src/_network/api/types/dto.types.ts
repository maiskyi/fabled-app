export { StoryStatusType, StoryStatusLogType } from '../__generated__/query';
export type {
  GetUserStories,
  CreateFeedbackVariables,
  CreateInquiryVariables,
  GetBootstrap,
} from '../__generated__/query';

export enum ExtensionCode {
  KS_ACCESS_DENIED = 'KS_ACCESS_DENIED',
}

export interface AccessError {
  message: string;
  locations: Array<{
    line: number;
    column: number;
  }>;
  path: string[];
  extensions: {
    code: ExtensionCode;
    stacktrace: string[];
  };
}

export type Errors = AccessError[];
