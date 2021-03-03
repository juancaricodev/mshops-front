import React, { useState, useEffect } from 'react'

import { useParams, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './styles.scss'
import detailService from '@services/detail'
import Spinner from '@utils/components/Spinner'
import { formatAmount, formatDecimals } from '@utils/functions/formatNumbers'
import Breadcrumb from '@utils/components/Breadcrumb'

const ProductDetail = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [decimals, setDecimals] = useState()
  const [amount, setAmount] = useState()

  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    detailService
      .getId(id)
      .then(res => setProduct(res.item))
      .catch(err => {
        history.push(`/${id}`)
        return console.error(err)
      })
  }, [])

  useEffect(() => {
    Object.keys(product).length > 0 && setLoading(false)

    product.price && Promise.resolve(formatDecimals(product.price.decimals))
      .then(res => setDecimals(res))

    product.price && Promise.resolve(formatAmount(product.price.amount))
      .then(res => setAmount(res))
  }, [product])

  return (
    <>
      <Helmet>
        <title>{`${product?.title} | Mercado Libre - by: juancaricodev`}</title>
        <meta name='description' content={`Cómpralo en Mercado Libre a $ ${amount}. Encuentra más productos de ${product.categories}.`} />
      </Helmet>

      <Breadcrumb categories={product.categories} />
      <div className='detail'>
        {loading
          ? <Spinner />
          : (
            <>
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
                  &#36; {amount}
                  <sup>{decimals < 10 ? `0${decimals}` : decimals}</sup>
                </div>

                <button type='button'>Comprar</button>
              </section>

              <section className='detail__description'>
                <div className='detail__description-title'>Descipci&oacute;n del producto</div>

                <div className='detail__description-content'>{product.description}</div>
              </section>
            </>
            )}
      </div>
    </>
  )
}

export default ProductDetail
