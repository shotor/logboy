import React, { InputHTMLAttributes } from 'react'

type InputHtmlProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'value'
  | 'type'
  | 'placeholder'
  | 'defaultValue'
  | 'step'
>

type ComponentProps = {
  error?: string
  touched: boolean
}

type InputProps = InputHtmlProps & ComponentProps

export const Input: React.FC<InputProps> = ({ error, touched, ...rest }) => {
  return (
    <>
      <input {...rest} />
      {touched && error}
    </>
  )
}
