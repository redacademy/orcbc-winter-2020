const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    currentUser: User!
  }

  type Mutation {
    register(name: String!, password: String!, email: String!): AuthResponse!
    login(email: String!, password: String!): AuthResponse!
  }

  type AuthResponse {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
