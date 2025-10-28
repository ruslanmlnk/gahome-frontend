import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://admin.homegudzdesign.com/api/graphql'

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {},
})

