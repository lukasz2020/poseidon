import React from 'react'
import ProductContainer from '../containers/ProductContainer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

export default (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/product/1' />
      </Route>
      <Route path='/product/:id'>
        <ProductContainer />
      </Route>
    </Switch>
  </Router>
)
