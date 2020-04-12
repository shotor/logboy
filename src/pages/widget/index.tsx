import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { WidgetCreate } from './widget-create'
import { WidgetDetails } from './widget-details'

export const Widget: React.FC = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/:id`} component={WidgetDetails} />
      <Route path={`${path}`} component={WidgetCreate} />
    </Switch>
  )
}
