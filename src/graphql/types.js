// Imports: GraphQL
const { gql } = require('apollo-server-express');

// GraphQL: TypeDefs
const TYPEDEFS = gql`
scalar Date

type Query {
  brokers(limit: Int): [Broker]
  broker(id: ID!): Broker
  investments(limit: Int): [Investment]
  investment(id: ID!): Investment
}

type Broker {
  id: ID!
  name: String!
  investments: [Investment]
}

type Investment {
  id: ID!
  name: String!
  broker: Broker
  balanceUpdates(limit: Int, order: [[String]]): [BalanceUpdate]
  transactions: [Transaction]
}

type BalanceUpdate {
  id: ID!
  amount: Float!
  date: Date!
}

type Transaction {
  id: ID!
  amount: Float!
  date: Date!
}
`;

module.exports = TYPEDEFS;
