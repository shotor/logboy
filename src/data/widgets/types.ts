import { DataObject } from '../types'

export type WidgetType = 'counter'

export interface Widget<T> extends DataObject {
  id: number
  values: T[]
  createdOn: Date
  type: WidgetType
}
