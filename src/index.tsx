import React from 'react'
import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'

// Pages
import Home from './pages/Home'

const Wrapper = styled.View`
  flex: 1;
  background: #2c3e50;
  align-items: center;
  justify-content: center;
`

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" backgroundColor="#2C3E50" />
      <Wrapper>
        <Home />
      </Wrapper>
    </ApolloProvider>
  )
}

export default App
