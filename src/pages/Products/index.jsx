import React, { useEffect, useState } from 'react'

import { useLocation, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './styles.scss'
import ShippingIcon from '@img/ic_shipping.png'
import Product from './components/Product'
import productsService from '@services/products'
import format from '@utils/functions/formatAccents'
import capitalizeString from '@utils/functions/capitalizeString'
import Spinner from '@utils/components/Spinner'
import NoMatch from './components/NoMatch'
import Breadcrumb from '@utils/components/Breadcrumb'

const Products = () => {
  const [products, setProducts] = useState({})
  const [query, setQuery] = useState()
  const [queryFormat, setQueryFormat] = useState()
  const [loading, setLoading] = useState(true)
  const [noMatch, setNoMatch] = useState(false)

  const querySearch = new URLSearchParams(useLocation().search)
  const history = useHistory()

  useEffect(() => {
    const queryString = querySearch.get('search')

    queryString.length > 0
      ? setQuery(queryString)
      : history.push('/')

    query && Promise.resolve(format(query))
      .then(res => setQueryFormat(res))

    return () => setQuery()
  }, [querySearch])

  useEffect(() => {
    queryFormat && productsService
      .getAll(queryFormat)
      .then(res => setProducts(res))
      .catch(err => console.error(err))
  }, [queryFormat])

  useEffect(() => {
    Object.keys(products).length > 0 && setLoading(false)

    !products.items?.length > 0
      ? setNoMatch(true)
      : setNoMatch(false)
  }, [products])

  return (
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
  )
}

export default Products
