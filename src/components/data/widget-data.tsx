import React from 'react'
import { Resource } from 'react-cache'
import {
  connect,
  add,
  DATABASE_NAME,
  createReadResource,
} from '../../data/indexed-db'
import { CounterModel } from '../widgets/counter/counter-types'

type WidgetDataContextAPI = {
  create: (model: any) => Promise<number>
  update: (model: any) => any
  remove: (id: string) => boolean
  read: Resource<number, CounterModel<any>>
}

const STORE_NAME = 'widgets'

export const WidgetDataContext = React.createContext<WidgetDataContextAPI>({
  read: createReadResource('widgets'),
  create: async (model) => {
    const db = await connect(DATABASE_NAME)
    const id = await add(db, STORE_NAME, model)
    db.close()
    return id
  },
  update: (model) => {},
  remove: (id) => {
    return false
  },
})
