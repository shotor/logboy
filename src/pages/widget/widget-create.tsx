import React, { useContext } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Container } from '../../components/core/container'
import { Text } from '../../components/core/text'
import { CounterCreateForm } from '../../components/widgets/counter'
import { CounterCreateModel } from '../../components/widgets/counter/types'
import { WidgetContext } from '../../data/widgets'

export const WidgetCreate: React.FC = () => {
  const context = useContext(WidgetContext)
  const { path } = useRouteMatch()
  const history = useHistory()

  return (
    <>
      <Container>
        <Text variant="title" as="h2">
          New Number Counter
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
