import React from 'react'
import { FieldProps } from 'formik'
import { Input } from '../core/input'

type FormikInputProps = {
  field: FieldProps
  type: string
  defaultValue?: any
  step?: number
}

export const FormikInput: React.FC<FormikInputProps> = ({
  type,
  defaultValue,
  step,
  field: {
    field: { value, name, onChange, onBlur },
    meta: { error, touched },
  },
}) => {
  return (
    <Input
      error={error}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      touched={touched}
      type={type}
      value={value}
      defaultValue={defaultValue}
      step={step}
    />
  )
}
