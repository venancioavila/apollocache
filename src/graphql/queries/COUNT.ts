import { gql } from '@apollo/client'

const COUNT = gql`
  query Count {
    count @client
  }
`

export default COUNT
