import React from 'react'

import './styles.scss'

const Product = ({ picture, title, price, freeShipping, ShippingIcon, location }) => {
  const priceThousand = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return (
    <li className='product'>
      <div className='product__content'>
        <section className='product__content-cover'>
          <img src={picture} alt={title} />
        </section>

        <section className='product__content-description'>
          <div className='product__content-description-price'>
            <p>&#36; {priceThousand}</p>
            {freeShipping && <img src={ShippingIcon} alt='free shipping' />}
          </div>

          <p className='product__content-description-title'>{title}</p>
        </section>

        <section className='product__content-location'>
          <p>{location}</p>
        </section>
      </div>

      <span />
    </li>
  )
}

export default Product
