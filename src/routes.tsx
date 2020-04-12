import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Widget } from './pages/widget'
import { NotFound } from './pages/not-found'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/widget" component={Widget} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
