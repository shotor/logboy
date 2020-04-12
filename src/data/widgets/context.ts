import { createContext } from 'react'
import { Resource } from 'react-cache'
import {
  createReadResource,
  createAllResource,
} from '../../lib/indexed-db/resources'
import { DATABASE_NAME } from '../../lib/indexed-db/types'
import { connect } from '../../lib/indexed-db/api/connect'
import { add } from '../../lib/indexed-db/api/add'
import { config } from '../../config'
import { read, update } from '../../lib/indexed-db/api'

const { database } = config
const STORE_NAME = 'widgets'

export type WidgetContextAPI<T> = {
  create: (model: any) => Promise<number>
  update: (model: { id: number; value: string | number; date: Date }) => any
  remove: (id: string) => boolean
  read: Resource<number, T>
  all: Resource<null, T[]>
}

export const Context = createContext<WidgetContextAPI<any>>({
  all: createAllResource(database, STORE_NAME),
  read: createReadResource(database, STORE_NAME),
  create: async (model) => {
    const db = await connect(DATABASE_NAME)
    const id = await add(db, STORE_NAME, model)
    db.close()
    return id
  },
  update: async ({ id, value, date }) => {
    const db = await connect(DATABASE_NAME)
    const current = await read(db, STORE_NAME, id)
    const updatedObject = {
      ...current,
      values: [
        ...current.values,
        {
          value,
          date,
        },
      ],
    }
    await update(db, STORE_NAME, updatedObject)
    db.close()
    return updatedObject
  },
  remove: (id) => {
    return false
  },
})
