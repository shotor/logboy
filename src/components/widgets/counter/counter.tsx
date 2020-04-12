import React, { useContext, useState } from 'react'
import { WidgetContext } from '../../../data/widgets'
import { CounterModel } from './types'
import { Text } from '../../core/text'
import { UpdateForm } from './update-form'
import { WidgetContextAPI } from '../../../data/widgets/context'

type CounterContextAPI = WidgetContextAPI<CounterModel<any>>

type CounterProps = {
  id: number
}

export const Counter: React.FC<CounterProps> = ({ id }) => {
  const { read: resource, update } = useContext<CounterContextAPI>(
    WidgetContext
  )
  const [value, setValue] = useState(resource.read(id))

  const { title, createdOn, valueType, type, values } = value

  return (
    <>
      <hr />
      <Text as="p">id: {id}</Text>
      <Text as="p">title: {title}</Text>
      <Text as="p">type: {type}</Text>
      <Text as="p">value type: {valueType}</Text>
      <Text as="p">created on: {createdOn.toString()}</Text>
      <Text as="p">values: {JSON.stringify(values, null, 2)}</Text>
      <hr />
      <Text variant="title" as="h2">
        Count
      </Text>
      <UpdateForm
        submit={async ({ value, date }) => {
          setValue(
            await update({
              id,
              value,
              date,
            })
          )
          return
        }}
        type={valueType}
      />
      <hr />
      <Text variant="title" as="h2">
        Manage
      </Text>
      <Text as="p">TODO</Text>
      <hr />
      <Text variant="title" as="h2">
        Track
      </Text>
      <Text as="p">TODO</Text>
    </>
  )
}
