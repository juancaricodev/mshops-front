import React, { useEffect, Suspense, lazy } from 'react'

import { useLocation, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './styles.scss'
import Product from './components/Product'
import useProducts from '../../hooks/useProducts'
import useQueryParam from '../../hooks/useQueryParam'
import capitalizeString from '@utils/functions/capitalizeString'
import Spinner from '@components/Spinner'
import Breadcrumb from '@components/Breadcrumb'

const NoMatch = lazy(() => import('./components/NoMatch'))

const Products = () => {
  const location = useLocation()
  const history = useHistory()
  const query = useQueryParam('search')?.trim() || ''
  const { data: products, loading, error } = useProducts(query)

  useEffect(() => {
    if (location.pathname === '/items' && !query) {
      history.replace('/')
    }
  }, [location.pathname, query, history])

  const items = products?.items || []
  const noMatch = !loading && !error && query && items.length === 0

  return (
    <Suspense fallback={<Spinner />}>
      <div className='products-container'>
        <Helmet>
          <title>{`${query ? capitalizeString(query) : 'Productos'} | Mercado Libre - by: juancaricodev`}</title>
          <meta
            name='description'
            content={`Encuentra ${query ? capitalizeString(query) : 'los mejores productos'} en MercadoLibre.com.co! Entre y conozca nuestras increíbles ofertas y promociones.`}
          />
        </Helmet>

        <Breadcrumb categories={products?.categories} />

        <div className='products'>
          {loading && <Spinner />}
          {error && (
            <div className='products__error'>
              <p>Ocurrió un error al cargar los productos. Por favor intenta de nuevo.</p>
            </div>
          )}
          {!loading && !error && noMatch && <NoMatch />}
          {!loading && !error && items.length > 0 && (
            <ul>
              {items.slice(0, 4).map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  picture={product.picture}
                  title={product.title}
                  price={product.price.amount}
                  freeShipping={product.free_shipping}
                  location={product.address?.city_name || product.address?.state_name || ''}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </Suspense>
  )
}

export default Products
