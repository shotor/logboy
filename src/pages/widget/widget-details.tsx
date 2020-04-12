import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../../components/core/container'
import { Text } from '../../components/core/text'
import { Counter } from '../../components/widgets/counter'

export const WidgetDetails: React.FC = () => {
  const { id } = useParams()

  return (
    <>
      <Container>
        <Text as="h2" variant="title">
          Widget Details
        </Text>
        <Suspense fallback={'Loading...'}>
          <Counter id={Number(id)} />
        </Suspense>
      </Container>
    </>
  )
}
