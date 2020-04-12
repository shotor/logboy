export type Value<T> = {
  date: Date
  value: T
}

export type CounterModel<T> = {
  id: string
  title: string
  createdOn: Date
  valueType: 'string' | 'number'
  values: Value<T>[]
  type: 'counter'
}

export type CounterCreateModel = Omit<CounterModel<any>, 'id'>

export type CounterCreateFormModel = Pick<
  CounterModel<any>,
  'title' | 'valueType'
>

export type CounterUpdateFormModel = {
  value: number | string | null | undefined
}

export type CounterUpdateModel = Pick<CounterModel<any>, 'id' | 'values'>
