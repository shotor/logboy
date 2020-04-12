/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled' | 'type' | 'onClick'
>

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      css={css`
        cursor: pointer;
      `}
    >
      {children}
    </button>
  )
}
