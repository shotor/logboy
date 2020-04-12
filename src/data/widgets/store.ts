import { DataStore } from '../types'
import { Widget } from './types'
import { createReadResource } from '../../lib/indexed-db/resources'
import { add } from '../../lib/indexed-db/api/add'
import { connect } from '../../lib/indexed-db/api/connect'

// TODO: types in methods shouldnt be needed
export class WidgetStore implements DataStore<Widget<unknown>> {
  private name = 'widgets'

  constructor(private database: string) {}

  all = async () => {
    throw new Error('not implemented')
  }

  allResource = null as any

  async read(id: number) {
    return null as any
  }

  readResource = createReadResource(this.database, this.name)

  add = async (model: any) => {
    const db = await connect(this.database)
    const id = await add(db, this.name, model)
    const result = await this.read(id)
    db.close()
    return result
  }

  update = async () => {
    throw new Error('not implemented')
  }

  remove = async () => {
    throw new Error('not implemented')
  }
}
