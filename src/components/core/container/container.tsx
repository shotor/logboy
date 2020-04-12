/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

export const Container: React.FC = ({ children }) => {
  return (
    <div
      css={css`
        max-width: 1440px;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  )
}
