export const connect = (name: string): Promise<IDBDatabase> =>
  new Promise((resolve) => {
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
      resolve((e.target as any).result as IDBDatabase)
    }

    request.onerror = () => {
      throw new Error(request.error?.message)
    }
  })
