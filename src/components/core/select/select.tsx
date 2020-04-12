import React from 'react'

type SelectProps = {
  error?: string
  name: string
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  selected: string
  touched: boolean
  values: { key: string; value: string }[]
}

export const Select: React.FC<SelectProps> = ({
  error,
  name,
  onBlur,
  onChange,
  selected,
  touched,
  values,
}) => {
  return (
    <>
      <select name={name} value={selected} onBlur={onBlur} onChange={onChange}>
        {values.map(({ key, value }) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </select>
      {touched && error}
    </>
  )
}
