import { unstable_createResource } from 'react-cache'

export const DATABASE_NAME = 'LOGBOY_DATA'

export const connect = (name: string): Promise<IDBDatabase> =>
  new Promise((resolve: any, reject: any) => {
    const request = window.indexedDB.open(name, 1)

    request.onupgradeneeded = (event) => {
      console.log('UPGRADE')
      const db = (event.target as any).result as IDBDatabase

      db.createObjectStore('widgets', {
        keyPath: 'id',
        autoIncrement: true,
      })
    }

    request.onsuccess = (e) => {
      console.log('SUCCESS')
      resolve((e.target as any).result as IDBDatabase)
    }

    request.onerror = (e) => {
      console.error(e)
      reject('Something went wrong during connection')
    }
  })

export const add = (
  db: IDBDatabase,
  storeName: string,
  model: any
): Promise<number> =>
  new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite')

    transaction.oncomplete = () => {
      resolve(request.result as number)
    }

    transaction.onerror = () => {
      console.error(request.error)
      reject('Something went wrong in add')
    }

    const store = transaction.objectStore(storeName)
    const request = store.add(model)
  })

export const read = (
  db: IDBDatabase,
  storeName: string,
  id: number
): Promise<any> =>
  new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite')

    transaction.oncomplete = () => {
      resolve(request.result)
    }

    transaction.onerror = () => {
      console.error(request.error)
      reject('Something went wrong in add')
    }

    const store = transaction.objectStore(storeName)
    const request = store.get(id)
  })

export const createReadResource = (store: string) =>
  unstable_createResource(async (id: number) => {
    const db = await connect(DATABASE_NAME)
    const value = await read(db, store, id)
    return value
  })
