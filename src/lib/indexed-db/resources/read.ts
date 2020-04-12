import { unstable_createResource } from 'react-cache'
import { connect, read } from '../api'

export const createReadResource = <T>(database: string, store: string) =>
  unstable_createResource(
    async (id: number): Promise<T> => {
      const db = await connect(database)
      const value = await read(db, store, id)
      db.close()
      return value
    }
  )
