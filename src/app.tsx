import React from 'react'
import { Routes } from './routes'
import { Text } from './components/core/text'
import { Container } from './components/core/container'

export const App = () => {
  return (
    <>
      <Container>
        <Text variant="hero" as="h1">
          Log Boy
        </Text>
      </Container>
      <Routes />
    </>
  )
}
