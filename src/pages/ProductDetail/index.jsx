import React from 'react'

import { useParams, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './styles.scss'
import useProductDetail from '../../hooks/useProductDetail'
import { formatAmount, formatDecimals } from '@utils/functions/formatNumbers'
import Spinner from '@components/Spinner'
import Breadcrumb from '@components/Breadcrumb'

const ProductDetail = () => {
  const { id } = useParams()
  const history = useHistory()
  const { data: product, loading, error } = useProductDetail(id)

  const amount = product?.price ? formatAmount(product.price.amount) : ''
  const decimals = product?.price ? formatDecimals(product.price.decimals) : 0

  if (loading) {
    return <Spinner />
  }

  if (error || !product) {
    return (
      <div className='detail detail--error'>
        <h2>No se pudo cargar el producto.</h2>
        <button type='button' onClick={() => history.push('/')}>
          Volver al inicio
        </button>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{`${product.title} | Mercado Libre - by: juancaricodev`}</title>
        <meta
          name='description'
          content={`Cómpralo en Mercado Libre a $ ${amount}. Encuentra más productos de ${product.categories?.[0] || ''}.`}
        />
      </Helmet>

      <Breadcrumb categories={product.categories} />
      <div className='detail'>
        <section className='detail__cover'>
          <img src={product.picture} alt={product.title} />
        </section>

        <section className='detail__info'>
          <h4 className='detail__info-status'>
            <span>{product.condition}</span> - {product.sold_quantity} vendidos
          </h4>

          <h1 className='detail__info-title'>{product.title}</h1>

          <h2 className='detail__info-price'>
            &#36; {amount}
            <sup>{decimals < 10 ? `0${decimals}` : decimals}</sup>
          </h2>

          <button type='button'>Comprar</button>
        </section>

        <section className='detail__description'>
          <h3 className='detail__description-title'>Descripción del producto</h3>
          <h4 className='detail__description-content'>{product.description}</h4>
        </section>
      </div>
    </>
  )
}

export default ProductDetail
