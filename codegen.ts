import {CodegenConfig} from '@graphql-codegen/cli';
import {URQL_CLIENT_URL} from './src/constants/urql';

const config: CodegenConfig = {
  schema: URQL_CLIENT_URL,
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
