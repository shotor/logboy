import { HtmlTag } from '../../../types/html-tag'
import { ReactComponent } from '../../../types/react-component'

const marginBottomTypes: HtmlTag[] = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const getMarginBottom = (
  marginBottom: boolean | undefined,
  as: HtmlTag | ReactComponent | undefined
) =>
  marginBottom ||
  (typeof marginBottom === 'undefined' &&
    typeof as === 'string' &&
    marginBottomTypes.includes(as))
