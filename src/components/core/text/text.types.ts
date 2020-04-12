import { ReactComponent } from '../../../types/react-component'
import { HtmlTag } from '../../../types/html-tag'

export type TextVariant = 'hero' | 'title' | 'subtitle' | 'body' | 'small'

export type TextProps = {
  as?: HtmlTag | ReactComponent
  className?: 'string'
  display?: 'inline' | 'block'
  marginBottom?: boolean
  variant?: TextVariant
}
