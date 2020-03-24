import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/sina-lankarani/server/dev',
});

export default client;
