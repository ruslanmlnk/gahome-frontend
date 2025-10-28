import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

const schema = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://admin.homegudzdesign.com/api/graphql'

const config: CodegenConfig = {
  schema,
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    'src/gql/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        useTypeImports: true,
        avoidOptionals: true,
        dedupeFragments: true,
        skipTypename: false,
      },
    },
  },
}

export default config

