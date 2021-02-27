import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from '@pages/Home'
import Layout from '@layout/Layout'
import Products from '@pages/Products'
import ProductDetail from '@pages/ProductDetail'
import NotFound from '@pages/NotFound'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/items' component={Products} />
          <Route exact path='/items/:id' component={ProductDetail} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
