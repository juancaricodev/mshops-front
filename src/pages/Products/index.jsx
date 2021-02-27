import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import './styles.scss'
import ShippingIcon from '@img/ic_shipping.png'
import Product from './components/Product'
import productsService from '@services/products'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const Products = () => {
  const [products, setProducts] = useState([])

  const query = useQuery()

  useEffect(() => {
    const search = query.get('search')

    productsService
      .getAll(search)
      .then(res => setProducts(res.items))
      .catch(err => console.error(err))
  }, [query])

  return (
    <div className='products'>
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
    </div>
  )
}

export default Products
