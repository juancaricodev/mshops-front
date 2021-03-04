import React, { useEffect, useState, Suspense, lazy } from 'react'

import { useLocation, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './styles.scss'
import ShippingIcon from '@img/ic_shipping.png'
import Product from './components/Product'
import productsService from '@services/products'
import formatAccents from '@utils/functions/formatAccents'
import capitalizeString from '@utils/functions/capitalizeString'
import Spinner from '@utils/components/Spinner'
import Breadcrumb from '@utils/components/Breadcrumb'

const NoMatch = lazy(() => import('./components/NoMatch'))

/**
 * Products
 * Page rendered when a product is searched through the SearchBar component
 * Implements lazy loading for rendering NoMatch component only when needed
 */
const Products = () => {
  // State implemented for storing the products once fetched
  const [products, setProducts] = useState({})
  // Raw query, needs to be formatted erasing the accent marks
  const [query, setQuery] = useState()
  // Query formatted (accent marks deleted)
  const [queryFormat, setQueryFormat] = useState()
  // loading state set true when data hasn't been retrieved yet
  const [loading, setLoading] = useState(true)
  // noMatch state set true when query doesn't match any result
  const [noMatch, setNoMatch] = useState(false)

  // { useLocation, useHistory } -> react-router-dom hooks for interacting with url state
  const querySearch = new URLSearchParams(useLocation().search)
  const history = useHistory()

  // Side effect watching on querySearch (useLocation hook)
  // Gets 'search' query param. and sets it to be formatted
  useEffect(() => {
    const queryString = querySearch.get('search')

    queryString.length > 0
      ? setQuery(queryString)
      : history.push('/')

    query && Promise.resolve(formatAccents(query))
      .then(res => setQueryFormat(res))

    return () => setQuery()
  }, [querySearch])

  // Side effect watching on queryFormat
  // Once query is formatted, is executed for fetching products data
  useEffect(() => {
    queryFormat && productsService
      .getAll(queryFormat)
      .then(res => setProducts(res))
      .catch(err => console.error(err))
  }, [queryFormat])

  // Side effect watching on products state
  // Handlign loading state and noMatch state
  useEffect(() => {
    Object.keys(products).length > 0 && setLoading(false)

    !products.items?.length > 0
      ? setNoMatch(true)
      : setNoMatch(false)
  }, [products])

  return (
    <Suspense fallback={<Spinner />}>
      <div className='products-container'>
        <Helmet>
          <title>{`${query && capitalizeString(query)} | Mercado Libre - by: juancaricodev`}</title>
          <meta name='description' content={`Encuentra ${query && capitalizeString(query)} en MercadoLibre.com.co! Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online.`} />
        </Helmet>

        <Breadcrumb categories={products?.categories} />
        <div className='products'>
          {
            loading
              ? <Spinner />
              : noMatch
                ? <NoMatch />
                : (
                  <ul>
                    {products.items.slice(0, 4).map((product) => (
                      <Product
                        key={product.id}
                        id={product.id}
                        picture={product.picture}
                        title={product.title}
                        price={product.price.amount}
                        freeShipping={product.free_shipping}
                        ShippingIcon={ShippingIcon}
                        location={product.address}
                      />
                    ))}
                  </ul>
                  )
          }
        </div>
      </div>
    </Suspense>
  )
}

export default Products
