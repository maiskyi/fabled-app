// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'orval';

const config = defineConfig({
  api: {
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
    input: {
      target: 'http://localhost:3001/docs/swagger.json',
    },
    output: {
      client: 'react-query',
      mock: false,
      mode: 'split',
      override: {
        mutator: {
          name: 'useCustomInstance',
          path: './src/_network/api/hooks/useCustomInstance/index.ts',
        },
        query: {
          options: {
            cacheTime: 0,
            refetchOnWindowFocus: false,
          },
          useInfinite: true,
          useInfiniteQueryParam: 'skip',
          version: 5,
        },
      },
      target: './src/_network/api/__generated__/client.ts',
    },
  },
});

export default config;
