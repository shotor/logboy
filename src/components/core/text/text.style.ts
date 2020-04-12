import { SerializedStyles, css } from '@emotion/core'
import { TextVariant } from './text.types'

export const variantCss: Record<TextVariant, SerializedStyles> = {
  hero: css`
    font-size: 48px;
  `,
  title: css`
    font-size: 24px;
  `,
  subtitle: css`
    font-size: 20px;
  `,
  body: css`
    font-size: 16px;
  `,
  small: css`
    font-size: 12px;
  `,
}
