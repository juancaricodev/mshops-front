import React from 'react'

import { Link } from 'react-router-dom'
import { formatAmount } from '@utils/functions/formatNumbers'
import './styles.scss'
/**
 * Product
 *
 * Component rendered for each product
 * @param {id, picture, title, price, freeShipping, ShippingIcon, location } props - Product data
 */
const Product = ({ id, picture, title, price, freeShipping, ShippingIcon, location }) => {
  // formatAmount function implemented for formatting the incoming price
  const priceThousand = formatAmount(price)

  return (
    <li className='product'>
      <div className='product__content'>
        <section className='product__content-cover'>
          <Link to={`/items/${id}`}>
            <img src={picture} alt={title} />
          </Link>
        </section>

        <section className='product__content-description'>
          <Link to={`/items/${id}`}>
            <div className='product__content-description-price'>
              <h1>&#36; {priceThousand}</h1>
              {freeShipping && <img src={ShippingIcon} alt='free shipping' />}
            </div>
            <h2 className='product__content-description-title'>{title}</h2>
          </Link>
        </section>

        <section className='product__content-location'>
          <h3>{location}</h3>
        </section>
      </div>

      <span />
    </li>
  )
}

export default Product
