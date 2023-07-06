import {Client, cacheExchange, fetchExchange} from 'urql';
import {URQL_CLIENT_URL} from '../constants/urql';

export const urqlClient = new Client({
  url: URQL_CLIENT_URL,
  exchanges: [cacheExchange, fetchExchange],
});
