import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/core/button'
import { Text } from '../components/core/text'
import { Container } from '../components/core/container'

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Text variant="title" as="h2">
          Home Page
        </Text>
        <Text as="p">This is home</Text>
        <Link to="/widget">
          <Button>New Widget</Button>
        </Link>
      </Container>
    </>
  )
}
