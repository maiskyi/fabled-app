// @ts-nocheck

import {
  useMutation,
  useQuery,
  useInfiniteQuery,
  UseMutationOptions,
  UseQueryOptions,
  UseInfiniteQueryOptions,
  InfiniteData,
} from '@tanstack/react-query';

import { useFetchData } from '../hooks/useFetchData/useFetchData.hook';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Character = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<CharacterLanguageType>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CharacterCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<CharacterLanguageType>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum CharacterLanguageType {
  En = 'en',
}

export type CharacterLanguageTypeNullableFilter = {
  equals?: InputMaybe<CharacterLanguageType>;
  in?: InputMaybe<Array<CharacterLanguageType>>;
  not?: InputMaybe<CharacterLanguageTypeNullableFilter>;
  notIn?: InputMaybe<Array<CharacterLanguageType>>;
};

export type CharacterOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isPublished?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type CharacterRelateToOneForCreateInput = {
  connect?: InputMaybe<CharacterWhereUniqueInput>;
  create?: InputMaybe<CharacterCreateInput>;
};

export type CharacterRelateToOneForUpdateInput = {
  connect?: InputMaybe<CharacterWhereUniqueInput>;
  create?: InputMaybe<CharacterCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CharacterUpdateArgs = {
  data: CharacterUpdateInput;
  where: CharacterWhereUniqueInput;
};

export type CharacterUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<CharacterLanguageType>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CharacterWhereInput = {
  AND?: InputMaybe<Array<CharacterWhereInput>>;
  NOT?: InputMaybe<Array<CharacterWhereInput>>;
  OR?: InputMaybe<Array<CharacterWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isPublished?: InputMaybe<BooleanFilter>;
  language?: InputMaybe<CharacterLanguageTypeNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CharacterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']['input']>;
  aspect_ratio?: InputMaybe<Scalars['String']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_space?: InputMaybe<Scalars['String']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  default_image?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['String']['input']>;
  density?: InputMaybe<Scalars['String']['input']>;
  dpr?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  fetch_format?: InputMaybe<Scalars['String']['input']>;
  flags?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  gravity?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  opacity?: InputMaybe<Scalars['String']['input']>;
  overlay?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['String']['input']>;
  transformation?: InputMaybe<Scalars['String']['input']>;
  underlay?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  zoom?: InputMaybe<Scalars['String']['input']>;
};

export type CloudinaryImage_File = {
  encoding?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  publicUrl?: Maybe<Scalars['String']['output']>;
  publicUrlTransformed?: Maybe<Scalars['String']['output']>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type Config = {
  id: Scalars['ID']['output'];
  privacyPolicyUrl?: Maybe<Scalars['String']['output']>;
  termsAndConditionsUrl?: Maybe<Scalars['String']['output']>;
};

export type ConfigCreateInput = {
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  termsAndConditionsUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  privacyPolicyUrl?: InputMaybe<OrderDirection>;
  termsAndConditionsUrl?: InputMaybe<OrderDirection>;
};

export type ConfigUpdateArgs = {
  data: ConfigUpdateInput;
  where?: ConfigWhereUniqueInput;
};

export type ConfigUpdateInput = {
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  termsAndConditionsUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigWhereInput = {
  AND?: InputMaybe<Array<ConfigWhereInput>>;
  NOT?: InputMaybe<Array<ConfigWhereInput>>;
  OR?: InputMaybe<Array<ConfigWhereInput>>;
  id?: InputMaybe<IdFilter>;
  privacyPolicyUrl?: InputMaybe<StringFilter>;
  termsAndConditionsUrl?: InputMaybe<StringFilter>;
};

export type ConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Feedback = {
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firebaseUserId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
};

export type FeedbackCreateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firebaseUserId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type FeedbackOrderByInput = {
  comment?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firebaseUserId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  rating?: InputMaybe<OrderDirection>;
};

export type FeedbackUpdateArgs = {
  data: FeedbackUpdateInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpdateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firebaseUserId?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type FeedbackWhereInput = {
  AND?: InputMaybe<Array<FeedbackWhereInput>>;
  NOT?: InputMaybe<Array<FeedbackWhereInput>>;
  OR?: InputMaybe<Array<FeedbackWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firebaseUserId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  rating?: InputMaybe<IntFilter>;
};

export type FeedbackWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Inquiry = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export type InquiryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type InquiryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  subject?: InputMaybe<OrderDirection>;
};

export type InquiryUpdateArgs = {
  data: InquiryUpdateInput;
  where: InquiryWhereUniqueInput;
};

export type InquiryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type InquiryWhereInput = {
  AND?: InputMaybe<Array<InquiryWhereInput>>;
  NOT?: InputMaybe<Array<InquiryWhereInput>>;
  OR?: InputMaybe<Array<InquiryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  message?: InputMaybe<StringFilter>;
  subject?: InputMaybe<StringFilter>;
};

export type InquiryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update',
}

export type KeystoneAdminUiFieldMetaItemView = {
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read',
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar',
}

export type KeystoneAdminUiFieldMetaListView = {
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read',
}

export type KeystoneAdminUiGraphQl = {
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  createInputName: Scalars['String']['output'];
  createManyMutationName: Scalars['String']['output'];
  createMutationName: Scalars['String']['output'];
  deleteManyMutationName: Scalars['String']['output'];
  deleteMutationName: Scalars['String']['output'];
  itemQueryName: Scalars['String']['output'];
  listOrderName: Scalars['String']['output'];
  listQueryCountName: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  outputTypeName: Scalars['String']['output'];
  relateToManyForCreateInputName: Scalars['String']['output'];
  relateToManyForUpdateInputName: Scalars['String']['output'];
  relateToOneForCreateInputName: Scalars['String']['output'];
  relateToOneForUpdateInputName: Scalars['String']['output'];
  updateInputName: Scalars['String']['output'];
  updateManyInputName: Scalars['String']['output'];
  updateManyMutationName: Scalars['String']['output'];
  updateMutationName: Scalars['String']['output'];
  whereInputName: Scalars['String']['output'];
  whereUniqueInputName: Scalars['String']['output'];
};

export type KeystoneAdminUiListMeta = {
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type KeystoneMeta = {
  adminMeta: KeystoneAdminMeta;
};

export type MoralLesson = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<MoralLessonLanguageType>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MoralLessonCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<MoralLessonLanguageType>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum MoralLessonLanguageType {
  En = 'en',
}

export type MoralLessonLanguageTypeNullableFilter = {
  equals?: InputMaybe<MoralLessonLanguageType>;
  in?: InputMaybe<Array<MoralLessonLanguageType>>;
  not?: InputMaybe<MoralLessonLanguageTypeNullableFilter>;
  notIn?: InputMaybe<Array<MoralLessonLanguageType>>;
};

export type MoralLessonOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isPublished?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type MoralLessonRelateToOneForCreateInput = {
  connect?: InputMaybe<MoralLessonWhereUniqueInput>;
  create?: InputMaybe<MoralLessonCreateInput>;
};

export type MoralLessonRelateToOneForUpdateInput = {
  connect?: InputMaybe<MoralLessonWhereUniqueInput>;
  create?: InputMaybe<MoralLessonCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MoralLessonUpdateArgs = {
  data: MoralLessonUpdateInput;
  where: MoralLessonWhereUniqueInput;
};

export type MoralLessonUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<MoralLessonLanguageType>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MoralLessonWhereInput = {
  AND?: InputMaybe<Array<MoralLessonWhereInput>>;
  NOT?: InputMaybe<Array<MoralLessonWhereInput>>;
  OR?: InputMaybe<Array<MoralLessonWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isPublished?: InputMaybe<BooleanFilter>;
  language?: InputMaybe<MoralLessonLanguageTypeNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type MoralLessonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createCharacter?: Maybe<Character>;
  createCharacters?: Maybe<Array<Maybe<Character>>>;
  createConfig?: Maybe<Config>;
  createConfigs?: Maybe<Array<Maybe<Config>>>;
  createFeedback?: Maybe<Feedback>;
  createFeedbacks?: Maybe<Array<Maybe<Feedback>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createInquiries?: Maybe<Array<Maybe<Inquiry>>>;
  createInquiry?: Maybe<Inquiry>;
  createMoralLesson?: Maybe<MoralLesson>;
  createMoralLessons?: Maybe<Array<Maybe<MoralLesson>>>;
  createPlaceOfEvent?: Maybe<PlaceOfEvent>;
  createPlaceOfEvents?: Maybe<Array<Maybe<PlaceOfEvent>>>;
  createPrompt?: Maybe<Prompt>;
  createPrompts?: Maybe<Array<Maybe<Prompt>>>;
  createStories?: Maybe<Array<Maybe<Story>>>;
  createStory?: Maybe<Story>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteCharacter?: Maybe<Character>;
  deleteCharacters?: Maybe<Array<Maybe<Character>>>;
  deleteConfig?: Maybe<Config>;
  deleteConfigs?: Maybe<Array<Maybe<Config>>>;
  deleteFeedback?: Maybe<Feedback>;
  deleteFeedbacks?: Maybe<Array<Maybe<Feedback>>>;
  deleteInquiries?: Maybe<Array<Maybe<Inquiry>>>;
  deleteInquiry?: Maybe<Inquiry>;
  deleteMoralLesson?: Maybe<MoralLesson>;
  deleteMoralLessons?: Maybe<Array<Maybe<MoralLesson>>>;
  deletePlaceOfEvent?: Maybe<PlaceOfEvent>;
  deletePlaceOfEvents?: Maybe<Array<Maybe<PlaceOfEvent>>>;
  deletePrompt?: Maybe<Prompt>;
  deletePrompts?: Maybe<Array<Maybe<Prompt>>>;
  deleteStories?: Maybe<Array<Maybe<Story>>>;
  deleteStory?: Maybe<Story>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateCharacter?: Maybe<Character>;
  updateCharacters?: Maybe<Array<Maybe<Character>>>;
  updateConfig?: Maybe<Config>;
  updateConfigs?: Maybe<Array<Maybe<Config>>>;
  updateFeedback?: Maybe<Feedback>;
  updateFeedbacks?: Maybe<Array<Maybe<Feedback>>>;
  updateInquiries?: Maybe<Array<Maybe<Inquiry>>>;
  updateInquiry?: Maybe<Inquiry>;
  updateMoralLesson?: Maybe<MoralLesson>;
  updateMoralLessons?: Maybe<Array<Maybe<MoralLesson>>>;
  updatePlaceOfEvent?: Maybe<PlaceOfEvent>;
  updatePlaceOfEvents?: Maybe<Array<Maybe<PlaceOfEvent>>>;
  updatePrompt?: Maybe<Prompt>;
  updatePrompts?: Maybe<Array<Maybe<Prompt>>>;
  updateStories?: Maybe<Array<Maybe<Story>>>;
  updateStory?: Maybe<Story>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationCreateCharacterArgs = {
  data: CharacterCreateInput;
};

export type MutationCreateCharactersArgs = {
  data: Array<CharacterCreateInput>;
};

export type MutationCreateConfigArgs = {
  data: ConfigCreateInput;
};

export type MutationCreateConfigsArgs = {
  data: Array<ConfigCreateInput>;
};

export type MutationCreateFeedbackArgs = {
  data: FeedbackCreateInput;
};

export type MutationCreateFeedbacksArgs = {
  data: Array<FeedbackCreateInput>;
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type MutationCreateInquiriesArgs = {
  data: Array<InquiryCreateInput>;
};

export type MutationCreateInquiryArgs = {
  data: InquiryCreateInput;
};

export type MutationCreateMoralLessonArgs = {
  data: MoralLessonCreateInput;
};

export type MutationCreateMoralLessonsArgs = {
  data: Array<MoralLessonCreateInput>;
};

export type MutationCreatePlaceOfEventArgs = {
  data: PlaceOfEventCreateInput;
};

export type MutationCreatePlaceOfEventsArgs = {
  data: Array<PlaceOfEventCreateInput>;
};

export type MutationCreatePromptArgs = {
  data: PromptCreateInput;
};

export type MutationCreatePromptsArgs = {
  data: Array<PromptCreateInput>;
};

export type MutationCreateStoriesArgs = {
  data: Array<StoryCreateInput>;
};

export type MutationCreateStoryArgs = {
  data: StoryCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};

export type MutationDeleteCharacterArgs = {
  where: CharacterWhereUniqueInput;
};

export type MutationDeleteCharactersArgs = {
  where: Array<CharacterWhereUniqueInput>;
};

export type MutationDeleteConfigArgs = {
  where?: ConfigWhereUniqueInput;
};

export type MutationDeleteConfigsArgs = {
  where: Array<ConfigWhereUniqueInput>;
};

export type MutationDeleteFeedbackArgs = {
  where: FeedbackWhereUniqueInput;
};

export type MutationDeleteFeedbacksArgs = {
  where: Array<FeedbackWhereUniqueInput>;
};

export type MutationDeleteInquiriesArgs = {
  where: Array<InquiryWhereUniqueInput>;
};

export type MutationDeleteInquiryArgs = {
  where: InquiryWhereUniqueInput;
};

export type MutationDeleteMoralLessonArgs = {
  where: MoralLessonWhereUniqueInput;
};

export type MutationDeleteMoralLessonsArgs = {
  where: Array<MoralLessonWhereUniqueInput>;
};

export type MutationDeletePlaceOfEventArgs = {
  where: PlaceOfEventWhereUniqueInput;
};

export type MutationDeletePlaceOfEventsArgs = {
  where: Array<PlaceOfEventWhereUniqueInput>;
};

export type MutationDeletePromptArgs = {
  where: PromptWhereUniqueInput;
};

export type MutationDeletePromptsArgs = {
  where: Array<PromptWhereUniqueInput>;
};

export type MutationDeleteStoriesArgs = {
  where: Array<StoryWhereUniqueInput>;
};

export type MutationDeleteStoryArgs = {
  where: StoryWhereUniqueInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};

export type MutationUpdateCharacterArgs = {
  data: CharacterUpdateInput;
  where: CharacterWhereUniqueInput;
};

export type MutationUpdateCharactersArgs = {
  data: Array<CharacterUpdateArgs>;
};

export type MutationUpdateConfigArgs = {
  data: ConfigUpdateInput;
  where?: ConfigWhereUniqueInput;
};

export type MutationUpdateConfigsArgs = {
  data: Array<ConfigUpdateArgs>;
};

export type MutationUpdateFeedbackArgs = {
  data: FeedbackUpdateInput;
  where: FeedbackWhereUniqueInput;
};

export type MutationUpdateFeedbacksArgs = {
  data: Array<FeedbackUpdateArgs>;
};

export type MutationUpdateInquiriesArgs = {
  data: Array<InquiryUpdateArgs>;
};

export type MutationUpdateInquiryArgs = {
  data: InquiryUpdateInput;
  where: InquiryWhereUniqueInput;
};

export type MutationUpdateMoralLessonArgs = {
  data: MoralLessonUpdateInput;
  where: MoralLessonWhereUniqueInput;
};

export type MutationUpdateMoralLessonsArgs = {
  data: Array<MoralLessonUpdateArgs>;
};

export type MutationUpdatePlaceOfEventArgs = {
  data: PlaceOfEventUpdateInput;
  where: PlaceOfEventWhereUniqueInput;
};

export type MutationUpdatePlaceOfEventsArgs = {
  data: Array<PlaceOfEventUpdateArgs>;
};

export type MutationUpdatePromptArgs = {
  data: PromptUpdateInput;
  where: PromptWhereUniqueInput;
};

export type MutationUpdatePromptsArgs = {
  data: Array<PromptUpdateArgs>;
};

export type MutationUpdateStoriesArgs = {
  data: Array<StoryUpdateArgs>;
};

export type MutationUpdateStoryArgs = {
  data: StoryUpdateInput;
  where: StoryWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type PasswordState = {
  isSet: Scalars['Boolean']['output'];
};

export type PlaceOfEvent = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<PlaceOfEventLanguageType>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PlaceOfEventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<PlaceOfEventLanguageType>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum PlaceOfEventLanguageType {
  En = 'en',
}

export type PlaceOfEventLanguageTypeNullableFilter = {
  equals?: InputMaybe<PlaceOfEventLanguageType>;
  in?: InputMaybe<Array<PlaceOfEventLanguageType>>;
  not?: InputMaybe<PlaceOfEventLanguageTypeNullableFilter>;
  notIn?: InputMaybe<Array<PlaceOfEventLanguageType>>;
};

export type PlaceOfEventOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isPublished?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PlaceOfEventRelateToOneForCreateInput = {
  connect?: InputMaybe<PlaceOfEventWhereUniqueInput>;
  create?: InputMaybe<PlaceOfEventCreateInput>;
};

export type PlaceOfEventRelateToOneForUpdateInput = {
  connect?: InputMaybe<PlaceOfEventWhereUniqueInput>;
  create?: InputMaybe<PlaceOfEventCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PlaceOfEventUpdateArgs = {
  data: PlaceOfEventUpdateInput;
  where: PlaceOfEventWhereUniqueInput;
};

export type PlaceOfEventUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<PlaceOfEventLanguageType>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PlaceOfEventWhereInput = {
  AND?: InputMaybe<Array<PlaceOfEventWhereInput>>;
  NOT?: InputMaybe<Array<PlaceOfEventWhereInput>>;
  OR?: InputMaybe<Array<PlaceOfEventWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isPublished?: InputMaybe<BooleanFilter>;
  language?: InputMaybe<PlaceOfEventLanguageTypeNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PlaceOfEventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Prompt = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  imagePrompt?: Maybe<Scalars['String']['output']>;
  language?: Maybe<PromptLanguageType>;
  message?: Maybe<Scalars['String']['output']>;
  textPrompt?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PromptCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  imagePrompt?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<PromptLanguageType>;
  message?: InputMaybe<Scalars['String']['input']>;
  textPrompt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum PromptLanguageType {
  En = 'en',
}

export type PromptLanguageTypeNullableFilter = {
  equals?: InputMaybe<PromptLanguageType>;
  in?: InputMaybe<Array<PromptLanguageType>>;
  not?: InputMaybe<PromptLanguageTypeNullableFilter>;
  notIn?: InputMaybe<Array<PromptLanguageType>>;
};

export type PromptOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imagePrompt?: InputMaybe<OrderDirection>;
  language?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  textPrompt?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PromptRelateToOneForCreateInput = {
  connect?: InputMaybe<PromptWhereUniqueInput>;
  create?: InputMaybe<PromptCreateInput>;
};

export type PromptRelateToOneForUpdateInput = {
  connect?: InputMaybe<PromptWhereUniqueInput>;
  create?: InputMaybe<PromptCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PromptUpdateArgs = {
  data: PromptUpdateInput;
  where: PromptWhereUniqueInput;
};

export type PromptUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  imagePrompt?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<PromptLanguageType>;
  message?: InputMaybe<Scalars['String']['input']>;
  textPrompt?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PromptWhereInput = {
  AND?: InputMaybe<Array<PromptWhereInput>>;
  NOT?: InputMaybe<Array<PromptWhereInput>>;
  OR?: InputMaybe<Array<PromptWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  imagePrompt?: InputMaybe<StringFilter>;
  language?: InputMaybe<PromptLanguageTypeNullableFilter>;
  message?: InputMaybe<StringFilter>;
  textPrompt?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PromptWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Query = {
  authenticatedItem?: Maybe<AuthenticatedItem>;
  character?: Maybe<Character>;
  characters?: Maybe<Array<Character>>;
  charactersCount?: Maybe<Scalars['Int']['output']>;
  config?: Maybe<Config>;
  configs?: Maybe<Array<Config>>;
  configsCount?: Maybe<Scalars['Int']['output']>;
  feedback?: Maybe<Feedback>;
  feedbacks?: Maybe<Array<Feedback>>;
  feedbacksCount?: Maybe<Scalars['Int']['output']>;
  inquiries?: Maybe<Array<Inquiry>>;
  inquiriesCount?: Maybe<Scalars['Int']['output']>;
  inquiry?: Maybe<Inquiry>;
  keystone: KeystoneMeta;
  moralLesson?: Maybe<MoralLesson>;
  moralLessons?: Maybe<Array<MoralLesson>>;
  moralLessonsCount?: Maybe<Scalars['Int']['output']>;
  placeOfEvent?: Maybe<PlaceOfEvent>;
  placeOfEvents?: Maybe<Array<PlaceOfEvent>>;
  placeOfEventsCount?: Maybe<Scalars['Int']['output']>;
  prompt?: Maybe<Prompt>;
  prompts?: Maybe<Array<Prompt>>;
  promptsCount?: Maybe<Scalars['Int']['output']>;
  stories?: Maybe<Array<Story>>;
  storiesCount?: Maybe<Scalars['Int']['output']>;
  story?: Maybe<Story>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};

export type QueryCharacterArgs = {
  where: CharacterWhereUniqueInput;
};

export type QueryCharactersArgs = {
  cursor?: InputMaybe<CharacterWhereUniqueInput>;
  orderBy?: Array<CharacterOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CharacterWhereInput;
};

export type QueryCharactersCountArgs = {
  where?: CharacterWhereInput;
};

export type QueryConfigArgs = {
  where?: ConfigWhereUniqueInput;
};

export type QueryConfigsArgs = {
  cursor?: InputMaybe<ConfigWhereUniqueInput>;
  orderBy?: Array<ConfigOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ConfigWhereInput;
};

export type QueryConfigsCountArgs = {
  where?: ConfigWhereInput;
};

export type QueryFeedbackArgs = {
  where: FeedbackWhereUniqueInput;
};

export type QueryFeedbacksArgs = {
  cursor?: InputMaybe<FeedbackWhereUniqueInput>;
  orderBy?: Array<FeedbackOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FeedbackWhereInput;
};

export type QueryFeedbacksCountArgs = {
  where?: FeedbackWhereInput;
};

export type QueryInquiriesArgs = {
  cursor?: InputMaybe<InquiryWhereUniqueInput>;
  orderBy?: Array<InquiryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InquiryWhereInput;
};

export type QueryInquiriesCountArgs = {
  where?: InquiryWhereInput;
};

export type QueryInquiryArgs = {
  where: InquiryWhereUniqueInput;
};

export type QueryMoralLessonArgs = {
  where: MoralLessonWhereUniqueInput;
};

export type QueryMoralLessonsArgs = {
  cursor?: InputMaybe<MoralLessonWhereUniqueInput>;
  orderBy?: Array<MoralLessonOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MoralLessonWhereInput;
};

export type QueryMoralLessonsCountArgs = {
  where?: MoralLessonWhereInput;
};

export type QueryPlaceOfEventArgs = {
  where: PlaceOfEventWhereUniqueInput;
};

export type QueryPlaceOfEventsArgs = {
  cursor?: InputMaybe<PlaceOfEventWhereUniqueInput>;
  orderBy?: Array<PlaceOfEventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PlaceOfEventWhereInput;
};

export type QueryPlaceOfEventsCountArgs = {
  where?: PlaceOfEventWhereInput;
};

export type QueryPromptArgs = {
  where: PromptWhereUniqueInput;
};

export type QueryPromptsArgs = {
  cursor?: InputMaybe<PromptWhereUniqueInput>;
  orderBy?: Array<PromptOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PromptWhereInput;
};

export type QueryPromptsCountArgs = {
  where?: PromptWhereInput;
};

export type QueryStoriesArgs = {
  cursor?: InputMaybe<StoryWhereUniqueInput>;
  orderBy?: Array<StoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: StoryWhereInput;
};

export type QueryStoriesCountArgs = {
  where?: StoryWhereInput;
};

export type QueryStoryArgs = {
  where: StoryWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};

export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Story = {
  character?: Maybe<Character>;
  content?: Maybe<Scalars['String']['output']>;
  contentPrompt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firebaseUserId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  imagePrompt?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  moralLesson?: Maybe<MoralLesson>;
  parent?: Maybe<Story>;
  placeOfEvent?: Maybe<PlaceOfEvent>;
  prompt?: Maybe<Prompt>;
  readTime?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<StoryStatusType>;
  statusLog?: Maybe<Array<StoryStatusLogType>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StoryCreateInput = {
  character?: InputMaybe<CharacterRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentPrompt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  firebaseUserId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  imagePrompt?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  moralLesson?: InputMaybe<MoralLessonRelateToOneForCreateInput>;
  parent?: InputMaybe<StoryRelateToOneForCreateInput>;
  placeOfEvent?: InputMaybe<PlaceOfEventRelateToOneForCreateInput>;
  prompt?: InputMaybe<PromptRelateToOneForCreateInput>;
  readTime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<StoryStatusType>;
  statusLog?: InputMaybe<Array<StoryStatusLogType>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StoryOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  contentPrompt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  firebaseUserId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imagePrompt?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  readTime?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type StoryRelateToOneForCreateInput = {
  connect?: InputMaybe<StoryWhereUniqueInput>;
  create?: InputMaybe<StoryCreateInput>;
};

export type StoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<StoryWhereUniqueInput>;
  create?: InputMaybe<StoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum StoryStatusLogType {
  ContentInProgress = 'contentInProgress',
  CreateStoryRequestFailed = 'createStoryRequestFailed',
  ImageInProgress = 'imageInProgress',
  Initialized = 'initialized',
  StoryContentGenerationFailed = 'storyContentGenerationFailed',
  StoryContentGenerationFailedWithNoResult = 'storyContentGenerationFailedWithNoResult',
  StoryGenerationFailed = 'storyGenerationFailed',
  StoryImageGenerationFailed = 'storyImageGenerationFailed',
  StoryImageGenerationFailedWithNoResult = 'storyImageGenerationFailedWithNoResult',
  StoryImageUploadFailed = 'storyImageUploadFailed',
  StoryImageUploadingToCloudinaryFailed = 'storyImageUploadingToCloudinaryFailed',
  Success = 'success',
}

export enum StoryStatusType {
  Failed = 'failed',
  Inprogress = 'inprogress',
  Success = 'success',
}

export type StoryStatusTypeNullableFilter = {
  equals?: InputMaybe<StoryStatusType>;
  in?: InputMaybe<Array<StoryStatusType>>;
  not?: InputMaybe<StoryStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<StoryStatusType>>;
};

export type StoryUpdateArgs = {
  data: StoryUpdateInput;
  where: StoryWhereUniqueInput;
};

export type StoryUpdateInput = {
  character?: InputMaybe<CharacterRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentPrompt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  firebaseUserId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  imagePrompt?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  moralLesson?: InputMaybe<MoralLessonRelateToOneForUpdateInput>;
  parent?: InputMaybe<StoryRelateToOneForUpdateInput>;
  placeOfEvent?: InputMaybe<PlaceOfEventRelateToOneForUpdateInput>;
  prompt?: InputMaybe<PromptRelateToOneForUpdateInput>;
  readTime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<StoryStatusType>;
  statusLog?: InputMaybe<Array<StoryStatusLogType>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StoryWhereInput = {
  AND?: InputMaybe<Array<StoryWhereInput>>;
  NOT?: InputMaybe<Array<StoryWhereInput>>;
  OR?: InputMaybe<Array<StoryWhereInput>>;
  character?: InputMaybe<CharacterWhereInput>;
  content?: InputMaybe<StringFilter>;
  contentPrompt?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  firebaseUserId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  imagePrompt?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  moralLesson?: InputMaybe<MoralLessonWhereInput>;
  parent?: InputMaybe<StoryWhereInput>;
  placeOfEvent?: InputMaybe<PlaceOfEventWhereInput>;
  prompt?: InputMaybe<PromptWhereInput>;
  readTime?: InputMaybe<IntFilter>;
  status?: InputMaybe<StoryStatusTypeNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type StoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateFeedbackVariables = Exact<{
  comment: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;

export type CreateFeedback = { createFeedback?: { id: string } | null };

export type GetBootstrapVariables = Exact<{
  image?: InputMaybe<CloudinaryImageFormat>;
}>;

export type GetBootstrap = {
  moralLessons?: Array<{
    id: string;
    title?: string | null;
    description?: string | null;
  }> | null;
  placeOfEvents?: Array<{
    id: string;
    title?: string | null;
    image?: { publicUrlTransformed?: string | null } | null;
  }> | null;
  characters?: Array<{
    id: string;
    title?: string | null;
    description?: string | null;
    image?: { publicUrlTransformed?: string | null } | null;
  }> | null;
  prompts?: Array<{
    id: string;
    message?: string | null;
    textPrompt?: string | null;
    imagePrompt?: string | null;
  }> | null;
  config?: {
    privacyPolicyUrl?: string | null;
    termsAndConditionsUrl?: string | null;
  } | null;
};

export type GetRequestVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetRequest = {
  story?: {
    id: string;
    message?: string | null;
    status?: StoryStatusType | null;
    statusLog?: Array<StoryStatusLogType> | null;
    createdAt?: any | null;
    readTime?: number | null;
    character?: { id: string } | null;
    moralLesson?: { id: string } | null;
    placeOfEvent?: { id: string } | null;
    prompt?: { id: string } | null;
  } | null;
};

export const CreateFeedbackDocument = /*#__PURE__*/ `
    mutation createFeedback($comment: String!, $rating: Int!, $uid: String!, $email: String!) {
  createFeedback(
    data: {comment: $comment, rating: $rating, firebaseUserId: $uid, email: $email}
  ) {
    id
  }
}
    `;

export const useCreateFeedback = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateFeedback,
    TError,
    CreateFeedbackVariables,
    TContext
  >
) => {
  return useMutation<CreateFeedback, TError, CreateFeedbackVariables, TContext>(
    {
      mutationFn: useFetchData<CreateFeedback, CreateFeedbackVariables>(
        CreateFeedbackDocument
      ),
      mutationKey: ['createFeedback'],
      ...options,
    }
  );
};

export const GetBootstrapDocument = /*#__PURE__*/ `
    query getBootstrap($image: CloudinaryImageFormat) {
  moralLessons(where: {isPublished: {equals: true}}) {
    id
    title
    description
  }
  placeOfEvents(where: {isPublished: {equals: true}}) {
    id
    title
    image {
      publicUrlTransformed(transformation: $image)
    }
  }
  characters(where: {isPublished: {equals: true}}) {
    id
    title
    description
    image {
      publicUrlTransformed(transformation: $image)
    }
  }
  prompts {
    id
    message
    textPrompt
    imagePrompt
  }
  config(where: {id: "1"}) {
    privacyPolicyUrl
    termsAndConditionsUrl
  }
}
    `;

export const useGetBootstrap = <TData = GetBootstrap, TError = unknown>(
  variables?: GetBootstrapVariables,
  options?: Omit<UseQueryOptions<GetBootstrap, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<GetBootstrap, TError, TData>['queryKey'];
  }
) => {
  return useQuery<GetBootstrap, TError, TData>({
    queryFn: useFetchData<GetBootstrap, GetBootstrapVariables>(
      GetBootstrapDocument
    ).bind(null, variables),
    queryKey:
      variables === undefined ? ['getBootstrap'] : ['getBootstrap', variables],
    ...options,
  });
};

export const useInfiniteGetBootstrap = <
  TData = InfiniteData<GetBootstrap>,
  TError = unknown,
>(
  variables: GetBootstrapVariables,
  options: Omit<
    UseInfiniteQueryOptions<GetBootstrap, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<GetBootstrap, TError, TData>['queryKey'];
  }
) => {
  const query = useFetchData<GetBootstrap, GetBootstrapVariables>(
    GetBootstrapDocument
  );
  return useInfiniteQuery<GetBootstrap, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryFn: (metaData) =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        queryKey:
          (optionsQueryKey ?? variables === undefined)
            ? ['getBootstrap.infinite']
            : ['getBootstrap.infinite', variables],
        ...restOptions,
      };
    })()
  );
};

export const GetRequestDocument = /*#__PURE__*/ `
    query getRequest($id: ID!) {
  story(where: {id: $id}) {
    id
    message
    status
    statusLog
    createdAt
    character {
      id
    }
    moralLesson {
      id
    }
    placeOfEvent {
      id
    }
    prompt {
      id
    }
    readTime
  }
}
    `;

export const useGetRequest = <TData = GetRequest, TError = unknown>(
  variables: GetRequestVariables,
  options?: Omit<UseQueryOptions<GetRequest, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<GetRequest, TError, TData>['queryKey'];
  }
) => {
  return useQuery<GetRequest, TError, TData>({
    queryFn: useFetchData<GetRequest, GetRequestVariables>(
      GetRequestDocument
    ).bind(null, variables),
    queryKey: ['getRequest', variables],
    ...options,
  });
};

export const useInfiniteGetRequest = <
  TData = InfiniteData<GetRequest>,
  TError = unknown,
>(
  variables: GetRequestVariables,
  options: Omit<
    UseInfiniteQueryOptions<GetRequest, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<GetRequest, TError, TData>['queryKey'];
  }
) => {
  const query = useFetchData<GetRequest, GetRequestVariables>(
    GetRequestDocument
  );
  return useInfiniteQuery<GetRequest, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryFn: (metaData) =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        queryKey: optionsQueryKey ?? ['getRequest.infinite', variables],
        ...restOptions,
      };
    })()
  );
};
