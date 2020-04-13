import React, { useContext, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { WidgetContext } from '../../../data/widgets'
import { CounterModel, Value } from './types'
import { Text } from '../../core/text'
import { UpdateForm } from './update-form'
import { WidgetContextAPI } from '../../../data/widgets/context'

type CounterContextAPI = WidgetContextAPI<CounterModel<any>>

type CounterProps = {
  id: number
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const Counter: React.FC<CounterProps> = ({ id }) => {
  const { read: resource, update } = useContext<CounterContextAPI>(
    WidgetContext
  )
  const [value, setValue] = useState(resource.read(id))

  const { title, createdOn, valueType, type, values } = value

  // TODO: wont work for string vals

  const numbers = (values as Value<number>[]).map((x) => x.value)

  const min = numbers.reduce((acc, curr) => Math.min(acc, curr))
  const max = numbers.reduce((acc, curr) => Math.max(acc, curr))
  const avg = numbers.reduce((acc, curr) => acc + curr) / numbers.length

  const minDiff = avg - min
  const maxDiff = max - avg

  const yMin = Math.floor(min - minDiff)
  const yMax = Math.ceil(max + maxDiff)

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
        Track
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={values.map(({ date, value }) => ({
            value,
            date: date.toDateString(),
          }))}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
          <YAxis domain={[yMin, yMax]} padding={{ top: 30, bottom: 30 }} />
          <Tooltip />
          <Legend />
          <Line
            type="linear"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <hr />
      <Text variant="title" as="h2">
        Manage
      </Text>
      <Text as="p">TODO</Text>
      <hr />
    </>
  )
}
