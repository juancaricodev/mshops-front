import React, { lazy, Suspense } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from '@pages/Home'
import Layout from '@layout/Layout'
import NotFound from '@pages/NotFound'
import Spinner from '@utils/components/Spinner'

const Products = lazy(() => import('@pages/Products'))
const ProductDetail = lazy(() => import('@pages/ProductDetail'))

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  )
}

export default App
