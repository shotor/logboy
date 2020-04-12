import React, { useContext } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Container } from '../../components/core/container'
import { Text } from '../../components/core/text'
import { CounterCreateForm } from '../../components/widgets/counter'
import { WidgetDataContext } from '../../components/data/widget-data'
import { CounterCreateModel } from '../../components/widgets/counter/counter-types'

export const WidgetCreate: React.FC = () => {
  const context = useContext(WidgetDataContext)
  const { path } = useRouteMatch()
  const history = useHistory()

  return (
    <>
      <Container>
        <Text variant="title" as="h2">
          New Counter Widget
        </Text>
        <CounterCreateForm
          submit={async (model) => {
            const createModel: CounterCreateModel = {
              ...model,
              type: 'counter',
              createdOn: new Date(),
              values: [],
            }
            const id = await context.create(createModel)
            history.push(`${path}/${id}`)
          }}
        />
      </Container>
    </>
  )
}
