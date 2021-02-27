import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import './styles.scss'
import detailService from '@services/detail'

const ProductDetail = () => {
  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect(() => {
    detailService
      .getId(id)
      .then(res => setProduct(res.item))
      .catch(err => console.error(err))
  }, [])

  const priceThousand = product.price?.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  // const decimals = product.price?.decimals.toFixed(2)
  // const dec = decimals * 100

  return (
    <div className='detail'>
      <section className='detail__cover'>
        <img src={product.picture} alt={product.title} />
      </section>

      <section className='detail__info'>
        <div className='detail__info-status'>
          <span>{product.condition}</span> - {product.sold_quantity} vendidos
        </div>

        <div className='detail__info-title'>
          {product.title}
        </div>

        <div className='detail__info-price'>
          &#36; {priceThousand}
          {/* <sup>{decimals === '0' ? '00' : decimals}</sup> */}
          {/* <sup>{dec}</sup> */}
        </div>

        <button type='button'>Comprar</button>
      </section>

      <section className='detail__description'>
        <div className='detail__description-title'>Descipci&oacute;n del producto</div>

        <div className='detail__description-content'>{product.description}</div>
      </section>
    </div>
  )
}

export default ProductDetail
