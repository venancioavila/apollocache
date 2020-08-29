import { InMemoryCache } from '@apollo/client'
import { makeVar } from '@apollo/client'

export const countVar = makeVar<number>(0)

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        count() {
          return countVar()
        },
      },
    },
  },
})
