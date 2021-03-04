import React, { lazy, Suspense } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Layout from '@layout/Layout'
import Spinner from '@utils/components/Spinner'

const Home = lazy(() => import('@pages/Home'))
const Products = lazy(() => import('@pages/Products'))
const ProductDetail = lazy(() => import('@pages/ProductDetail'))
const NotFound = lazy(() => import('@pages/NotFound'))

/**
 * App
 * Contains the routes of the application
 * Implements React Router for handling the routes
 * Implements lazy and Suspense to handle lazy loading and improve performance
 */
const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/items' component={Products} />
            <Route exact path='/items/:id' component={ProductDetail} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
