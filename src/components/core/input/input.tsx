import React, { InputHTMLAttributes } from 'react'

type InputHtmlProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'name' | 'onBlur' | 'onChange' | 'value' | 'type' | 'placeholder'
>

type ComponentProps = {
  error?: string
  touched: boolean
}

type InputProps = InputHtmlProps & ComponentProps

export const Input: React.FC<InputProps> = ({
  error,
  name,
  onBlur,
  onChange,
  placeholder,
  touched,
  type,
  value,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
      {touched && error}
    </>
  )
}
