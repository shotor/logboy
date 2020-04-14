import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/core/button'
import { Text } from '../components/core/text'
import { Container } from '../components/core/container'
import { WidgetCollection } from '../components/widgets'

import img from '../logboy.jpg'

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <img
          src={img}
          alt="logboy"
          style={{
            width: 'auto',
            height: '500px',
            margin: '0 auto',
            display: 'flex',
          }}
        />
        <Text variant="title" as="h2">
          Home
        </Text>
        <Link to="/widget">
          <Button>New Widget</Button>
        </Link>
        <hr />
        <Suspense fallback="Loading...">
          <WidgetCollection />
        </Suspense>
      </Container>
    </>
  )
}
