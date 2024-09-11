// eslint-disable-next-line import/no-extraneous-dependencies
import { CodegenConfig } from '@graphql-codegen/cli';
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const schema = 'http://localhost:3000/api/graphql';

const config: CodegenConfig = {
  generates: {
    './src/_network/api/__generated__/query.ts': {
      config: {
        addInfiniteQuery: true,
        fetcher: {
          func: '../hooks/useFetchData/useFetchData.hook#useFetchData',
          isReactHook: true,
        },
        omitOperationSuffix: true,
        pureMagicComment: true,
        reactQueryVersion: 5,
        skipTypename: true,
        withHooks: true,
      },
      documents: ['./src/_network/api/documents/query/*.graphql'],
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
