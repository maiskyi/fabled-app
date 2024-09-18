// @ts-nocheck

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
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
  id: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
};

export type FeedbackCreateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type FeedbackOrderByInput = {
  comment?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
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
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type FeedbackWhereInput = {
  AND?: InputMaybe<Array<FeedbackWhereInput>>;
  NOT?: InputMaybe<Array<FeedbackWhereInput>>;
  OR?: InputMaybe<Array<FeedbackWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
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
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
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
  Desc = 'DESC'
}

export type KeystoneMeta = {
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createFeedback?: Maybe<Feedback>;
  createFeedbacks?: Maybe<Array<Maybe<Feedback>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createStories?: Maybe<Array<Maybe<Story>>>;
  createStory?: Maybe<Story>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteFeedback?: Maybe<Feedback>;
  deleteFeedbacks?: Maybe<Array<Maybe<Feedback>>>;
  deleteStories?: Maybe<Array<Maybe<Story>>>;
  deleteStory?: Maybe<Story>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateFeedback?: Maybe<Feedback>;
  updateFeedbacks?: Maybe<Array<Maybe<Feedback>>>;
  updateStories?: Maybe<Array<Maybe<Story>>>;
  updateStory?: Maybe<Story>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
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


export type MutationDeleteFeedbackArgs = {
  where: FeedbackWhereUniqueInput;
};


export type MutationDeleteFeedbacksArgs = {
  where: Array<FeedbackWhereUniqueInput>;
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


export type MutationUpdateFeedbackArgs = {
  data: FeedbackUpdateInput;
  where: FeedbackWhereUniqueInput;
};


export type MutationUpdateFeedbacksArgs = {
  data: Array<FeedbackUpdateArgs>;
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
  Desc = 'desc'
}

export type PasswordState = {
  isSet: Scalars['Boolean']['output'];
};

export type Query = {
  authenticatedItem?: Maybe<AuthenticatedItem>;
  feedback?: Maybe<Feedback>;
  feedbacks?: Maybe<Array<Feedback>>;
  feedbacksCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  stories?: Maybe<Array<Story>>;
  storiesCount?: Maybe<Scalars['Int']['output']>;
  story?: Maybe<Story>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
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
  Insensitive = 'insensitive'
}

export type Story = {
  content?: Maybe<Scalars['String']['output']>;
  contentPrompt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firebaseUserId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  imagePrompt?: Maybe<Scalars['String']['output']>;
  isReady?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  readTime?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Array<StoryStatusType>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StoryCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentPrompt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  firebaseUserId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  imagePrompt?: InputMaybe<Scalars['String']['input']>;
  isReady?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  readTime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Array<StoryStatusType>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StoryOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  contentPrompt?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  firebaseUserId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  imagePrompt?: InputMaybe<OrderDirection>;
  isReady?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  readTime?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export enum StoryStatusType {
  ContentInProgress = 'contentInProgress',
  ImageInProgress = 'imageInProgress',
  Initialized = 'initialized',
  Success = 'success'
}

export type StoryUpdateArgs = {
  data: StoryUpdateInput;
  where: StoryWhereUniqueInput;
};

export type StoryUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentPrompt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  firebaseUserId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  imagePrompt?: InputMaybe<Scalars['String']['input']>;
  isReady?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  readTime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Array<StoryStatusType>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type StoryWhereInput = {
  AND?: InputMaybe<Array<StoryWhereInput>>;
  NOT?: InputMaybe<Array<StoryWhereInput>>;
  OR?: InputMaybe<Array<StoryWhereInput>>;
  content?: InputMaybe<StringFilter>;
  contentPrompt?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  firebaseUserId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  imagePrompt?: InputMaybe<StringFilter>;
  isReady?: InputMaybe<BooleanFilter>;
  message?: InputMaybe<StringFilter>;
  readTime?: InputMaybe<IntFilter>;
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
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  storyUpdated?: Maybe<Story>;
};


export type SubscriptionStoryUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
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
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GetRequestVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRequest = { story?: { id: string, message?: string | null, status?: Array<StoryStatusType> | null } | null };

export type OnStoryUpdatedVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OnStoryUpdated = { storyUpdated?: { id: string, message?: string | null, status?: Array<StoryStatusType> | null } | null };


export const GetRequestDocument = gql`
    query getRequest($id: ID!) {
  story(where: {id: $id}) {
    id
    message
    status
  }
}
    `;

/**
 * __useGetRequest__
 *
 * To run a query within a React component, call `useGetRequest` and pass it any options that fit your needs.
 * When your component renders, `useGetRequest` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequest({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRequest(baseOptions: Apollo.QueryHookOptions<GetRequest, GetRequestVariables> & ({ variables: GetRequestVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRequest, GetRequestVariables>(GetRequestDocument, options);
      }
export function useGetRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRequest, GetRequestVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRequest, GetRequestVariables>(GetRequestDocument, options);
        }
export function useGetRequestSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRequest, GetRequestVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRequest, GetRequestVariables>(GetRequestDocument, options);
        }
export type GetRequestHookResult = ReturnType<typeof useGetRequest>;
export type GetRequestLazyQueryHookResult = ReturnType<typeof useGetRequestLazyQuery>;
export type GetRequestSuspenseQueryHookResult = ReturnType<typeof useGetRequestSuspenseQuery>;
export type GetRequestQueryResult = Apollo.QueryResult<GetRequest, GetRequestVariables>;
export const OnStoryUpdatedDocument = gql`
    subscription onStoryUpdated($id: ID!) {
  storyUpdated(id: $id) {
    id
    message
    status
  }
}
    `;

/**
 * __useOnStoryUpdated__
 *
 * To run a query within a React component, call `useOnStoryUpdated` and pass it any options that fit your needs.
 * When your component renders, `useOnStoryUpdated` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnStoryUpdated({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOnStoryUpdated(baseOptions: Apollo.SubscriptionHookOptions<OnStoryUpdated, OnStoryUpdatedVariables> & ({ variables: OnStoryUpdatedVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnStoryUpdated, OnStoryUpdatedVariables>(OnStoryUpdatedDocument, options);
      }
export type OnStoryUpdatedHookResult = ReturnType<typeof useOnStoryUpdated>;
export type OnStoryUpdatedSubscriptionResult = Apollo.SubscriptionResult<OnStoryUpdated>;