module.exports = {
  env: {
    node: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['prettier', 'sort-keys-fix'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'import/no-duplicates': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',

          'parent',
          'index',
          'sibling',
          'object',
          'type',
          'internal',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'builtin',
            pattern:
              '{qs,axios,use-context-selector,classnames,i18next,lodash,react,react-*,react-dom/*, */react-*}',
            patternOptions: { partial: true },
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '*.{css,sass,less,scss,pcss,styl}',
            patternOptions: { matchBase: true },
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true,
      },
    ],
    'no-console': 'warn',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'lf',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-key': 'error',
    'react/jsx-sort-props': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort-keys': [
      'warn',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: false },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
