interface GetBaseUrlParams {
  space: string;
  environment: string;
}

export const getBaseUrl = ({ space, environment }: GetBaseUrlParams) => {
  return `https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`;
};
