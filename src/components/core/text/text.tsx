/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { TextProps } from './text.types'
import { variantCss } from './text.style'
import { getMarginBottom } from './text.utils'
import { isDefined } from '../../../utils/is-defined'

export const Text: React.FC<TextProps> = ({
  as = 'span',
  children,
  className,
  display,
  marginBottom,
  variant = 'body',
}) => {
  const Tag = as as any

  return (
    <Tag
      className={className}
      css={[
        css`
          ${getMarginBottom(marginBottom, as) && 'margin-bottom: 16px'}
          ${isDefined(display) && `display: ${display}`}
        `,
        variantCss[variant],
      ]}
    >
      {children}
    </Tag>
  )
}
