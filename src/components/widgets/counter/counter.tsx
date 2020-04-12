import React, { useContext } from 'react'
import { Text } from '../../core/text'
import { WidgetDataContext } from '../../data/widget-data'

export const Counter: React.FC<{ id: number }> = ({ id }) => {
  const { read: resource } = useContext(WidgetDataContext)
  const { title, createdOn, valueType, type, values } = resource.read(id)

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
    </>
  )
}
