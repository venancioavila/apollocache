import React from 'react'
import styled from 'styled-components/native'
import { countVar } from '../graphql/cache'
import Display from '../common/Display'
import { useQuery } from '@apollo/client'
import COUNT from '../graphql/queries/COUNT'

const Wrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

const Button = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: #fff;
  align-items: center;
  justify-content: center;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const Text = styled.Text`
  font-size: 30px;
  font-weight: bold;
`

const Home = () => {
  const { data } = useQuery(COUNT)

  const add = () => {
    countVar(data.count + 1)
  }

  const rem = () => {
    if (data.count === 0) {
      return
    }
    countVar(data.count - 1)
  }

  return (
    <Wrapper>
      <Display />
      <Row>
        <Button onPress={rem}>
          <Text>-</Text>
        </Button>
        <Button onPress={add}>
          <Text>+</Text>
        </Button>
      </Row>
    </Wrapper>
  )
}

export default Home
