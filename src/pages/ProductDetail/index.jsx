import React from 'react'

import './styles.scss'

const product = {
  id: 'MLA876190028',
  title: 'Guitarra Electrica Ibanez Rg350dxz',
  price: {
    currency: 'ARS',
    amount: 82190,
    decimals: 0.9400000000023283
  },
  picture: 'http://http2.mlstatic.com/D_745271-MLA43336454342_092020-O.jpg',
  condition: 'used',
  free_shipping: true,
  sold_quantity: 243,
  description: 'Ibanez rg350dxz indonesia. Floyd. Muy buen estado, recién calibrada, con funda. Ibanez rg350dxz indonesia. Floyd. Muy buen estado, recién calibrada, con funda. Ibanez rg350dxz indonesia. Floyd. Muy buen estado, recién calibrada, con funda.'
}

const ProductDetail = () => {
  const priceThousand = product.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  const decimals = Math.round(product.price.decimals * 100)

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
          <sup>{decimals}</sup>
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
