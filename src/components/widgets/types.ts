export type WidgetType = 'counter'

export interface Widget<T> {
  id: number
  values: T[]
  createdOn: Date
  type: WidgetType
}
