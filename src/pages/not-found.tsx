import React from 'react'
import { Container } from '../components/core/container'
import { Text } from '../components/core/text'
import { Button } from '../components/core/button'

export const NotFound: React.FC = ({}) => {
  return (
    <>
      <Container>
        <Text as="h2" variant="title">
          404
        </Text>
        <Text as="p">Page Not Found</Text>
        {/* <Button onClick={() => navigate(-1)}>Go Back</Button> */}
      </Container>
    </>
  )
}
