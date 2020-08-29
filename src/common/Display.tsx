import React from 'react'
import styled from 'styled-components/native'
import { useQuery } from '@apollo/client'
import COUNT from '../graphql/queries/COUNT'

const Text = styled.Text`
  color: #fff;
  font-size: 100px;
  font-weight: bold;
`

const Display = () => {
  const { data } = useQuery(COUNT)

  return <Text>{data.count}</Text>
}

export default Display
