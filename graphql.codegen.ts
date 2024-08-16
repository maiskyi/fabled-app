// eslint-disable-next-line import/no-extraneous-dependencies
import { CodegenConfig } from '@graphql-codegen/cli';
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const schema = `https://graphql.contentful.com/content/v1/spaces/${process.env.VITE_CONTENTFUL_SPACE_ID}/environments/${process.env.VITE_CONTENTFUL_ENVIRONMENT}`;

const config: CodegenConfig = {
  generates: {
    './src/_network/contentful/__generated__/query.ts': {
      config: {
        addInfiniteQuery: false,
        fetcher: {
          func: '../hooks/useFetchData/useFetchData.hook#useFetchData',
          isReactHook: true,
        },
        reactQueryVersion: 5,
        withHooks: true,
      },
      documents: ['./src/_network/contentful/documents/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
    },
  },
  ignoreNoDocuments: true,
  schema: [
    {
      [schema]: {
        headers: {
          Authorization: `Bearer ${process.env.VITE_CONTENTFUL_API_KEY}`,
        },
      },
    },
  ],
};

export default config;
