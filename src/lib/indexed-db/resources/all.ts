import { unstable_createResource } from 'react-cache'
import { connect, all } from '../api'

export const createAllResource = <T>(database: string, store: string) =>
  unstable_createResource(
    async (): Promise<T[]> => {
      const db = await connect(database)
      const result = await all<T>(db, store)
      db.close()
      return result
    }
  )
