import React, { useState, useEffect } from 'react'

import { useParams, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './styles.scss'
import detailService from '@services/detail'
import Spinner from '@utils/components/Spinner'
import { formatAmount, formatDecimals } from '@utils/functions/formatNumbers'
import Breadcrumb from '@utils/components/Breadcrumb'

/**
 * ProducDetail
 * Page rendered when a single product is consulted whether from the Products page or directly from URL with product id
 * Contains Helmet for generating document head tags
 */
const ProductDetail = () => {
  // State implemented for storing the product once fetched
  const [product, setProduct] = useState({})
  // loading state set true when data hasn't been retrieved yet
  const [loading, setLoading] = useState(true)
  // decimals and amount state implemented for formatting the corresponding incoming values
  const [decimals, setDecimals] = useState()
  const [amount, setAmount] = useState()

  // { useParams, useHistory } -> react-router-dom hooks for interacting with the url state
  const { id } = useParams()
  const history = useHistory()

  // Side effect executed to fetch the product data once the page is rendered
  useEffect(() => {
    detailService
      .getId(id)
      .then(res => setProduct(res.item))
      .catch(err => {
        history.push(`/${id}`)
        return console.error(err)
      })
  }, [])

  // Side effect watching on product state
  // Handles the loading state when data is not fetched yet
  // when product state gets the data, formats the amount and the decimals incoming values
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
                <h4 className='detail__info-status'>
                  <span>{product.condition}</span> - {product.sold_quantity} vendidos
                </h4>

                <h1 className='detail__info-title'>
                  {product.title}
                </h1>

                <h2 className='detail__info-price'>
                  &#36; {amount}
                  <sup>{decimals < 10 ? `0${decimals}` : decimals}</sup>
                </h2>

                <button type='button'>Comprar</button>
              </section>

              <section className='detail__description'>
                <h3 className='detail__description-title'>Descipci&oacute;n del producto</h3>

                <h4 className='detail__description-content'>{product.description}</h4>
              </section>
            </>
            )}
      </div>
    </>
  )
}

export default ProductDetail
