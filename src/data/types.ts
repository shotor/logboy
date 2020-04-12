import { Resource } from 'react-cache'

export interface DataObject {
  id: number
  createdOn: Date
}

export interface DataStore<T extends DataObject> {
  all: () => Promise<T[]>
  read: (id: number) => Promise<T>
  add: (model: Omit<T, 'id' | 'createdOn'>) => Promise<T>
  update: (model: T) => Promise<T>
  remove: (id: number) => Promise<void>

  readResource: Resource<number, any>
  allResource: Resource<never, any>
}
