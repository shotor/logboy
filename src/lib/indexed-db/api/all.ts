export const all = async <T>(
  db: IDBDatabase,
  storeName: string
): Promise<T[]> =>
  new Promise((resolve) => {
    const transaction = db.transaction([storeName], 'readonly')

    transaction.oncomplete = () => {
      resolve(request.result)
    }

    transaction.onerror = () => {
      throw new Error(request.error?.message)
    }

    const store = transaction.objectStore(storeName)
    const request = store.getAll()
  })
