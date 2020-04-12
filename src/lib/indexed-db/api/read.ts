export const read = (
  db: IDBDatabase,
  storeName: string,
  id: number
): Promise<any> =>
  new Promise((resolve) => {
    const transaction = db.transaction([storeName], 'readonly')

    transaction.oncomplete = () => {
      resolve(request.result)
    }

    transaction.onerror = () => {
      throw new Error(request.error?.message)
    }

    const store = transaction.objectStore(storeName)
    const request = store.get(id)
  })
