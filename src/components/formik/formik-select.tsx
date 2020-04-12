import React from 'react'
import { FieldProps } from 'formik'
import { Select } from '../core/select'

type Value = { key: string; value: string }

type FormikSelectProps = {
  field: FieldProps
  values: Value[]
}

export const FormikSelect: React.FC<FormikSelectProps> = ({
  field: {
    field: { value, name, onChange },
    meta: { error, touched },
  },
  values,
}) => {
  return (
    <Select
      error={error}
      name={name}
      onChange={onChange}
      selected={value}
      touched={touched}
      values={values}
    />
  )
}
