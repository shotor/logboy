export const update = (
  db: IDBDatabase,
  storeName: string,
  model: any
): Promise<number> =>
  new Promise((resolve) => {
    const transaction = db.transaction([storeName], 'readwrite')

    transaction.oncomplete = () => {
      resolve(request.result as number)
    }

    transaction.onerror = () => {
      throw new Error(request.error?.message)
    }

    const store = transaction.objectStore(storeName)
    const request = store.put(model)
  })
