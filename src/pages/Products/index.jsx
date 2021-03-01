import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import './styles.scss'
import ShippingIcon from '@img/ic_shipping.png'
import Product from './components/Product'
import productsService from '@services/products'
import format from '@utils/formatAccents'
import Spinner from '@utils/components/Spinner'

const Products = () => {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState()
  const [queryFormat, setQueryFormat] = useState()
  const [loading, setLoading] = useState(true)

  const querySearch = new URLSearchParams(useLocation().search)

  useEffect(() => {
    const queryString = querySearch.get('search')

    queryString.length > 0 && setQuery(queryString)

    query && Promise.resolve(format(query))
      .then(res => setQueryFormat(res))

    queryFormat && productsService
      .getAll(queryFormat)
      .then(res => setProducts(res.items))
      .catch(err => console.error(err))

    return () => setQuery()
  }, [querySearch])

  useEffect(() => {
    products.length > 0 && setLoading(false)
  }, [products])

  return (
    <div className='products'>
      {
        loading
          ? <Spinner />
          : (
            <ul>
              {products.slice(0, 4).map((product) => (
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
  )
}

export default Products
