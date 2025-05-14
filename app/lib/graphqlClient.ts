// lib/graphqlClient.ts
import { GraphQLClient } from "graphql-request";

const graphqlClient = new GraphQLClient("api/2024-01/graphql.json"); // Replace with your Shopify GraphQL endpoint URL

export default graphqlClient;
