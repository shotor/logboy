/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useContext } from 'react'
import { WidgetContext } from '../../data/widgets'
import { CounterModel } from './counter/types'
import { Text } from '../core/text'
import { Button } from '../core/button'
import { useHistory } from 'react-router-dom'
import { WidgetContextAPI } from '../../data/widgets/context'

type CounterContextAPI = WidgetContextAPI<CounterModel<any>>

export const Collection: React.FC = () => {
  const { all: resource } = useContext<CounterContextAPI>(WidgetContext)
  const history = useHistory()
  const values = resource.read(null)

  return (
    <React.Fragment>
      {values.map(({ id, title }) => {
        return (
          <div
            key={id}
            css={css`
              padding: 16px;
              border: 1px solid #000;
            `}
          >
            <Text as="div">id: {id}</Text>
            <Text as="div">title: {title}</Text>
            <Button
              onClick={() => {
                history.push(`/widget/${id}`)
              }}
            >
              Visit
            </Button>
          </div>
        )
      })}
    </React.Fragment>
  )
}
