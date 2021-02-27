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

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/productdetail' component={ProductDetail} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
