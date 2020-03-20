import ApolloClient from 'apollo-boost';
import {Platform} from 'react-native';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import AsyncStorage from '@react-native-community/async-storage';

const httpLink = createHttpLink({
  uri: `http://${Platform.OS === 'ios' ? 'localhost:8383' : '10.0.0.184:8383'}`,
});
const authLink = setContext(async (_, {headers}) => {
  let token;

  try {
    const val = await AsyncStorage.getItem('user');
    token = JSON.parse(val).token;
  } catch (e) {}

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/sina-lankarani/server/dev',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
