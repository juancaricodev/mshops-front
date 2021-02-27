import React from 'react'

import './styles.scss'
import ShippingIcon from '@img/ic_shipping.png'
import Product from './components/Product'

const products = [
  {
    id: 'MLA901209224',
    title: 'Plano Para Luthier B.c.rich Stealth ( A Escala Real)',
    price: {
      currency: 'ARS',
      amount: 950,
      decimals: 0
    },
    picture: 'http://http2.mlstatic.com/D_657292-MLA44343658595_122020-O.jpg',
    condition: 'new',
    free_shipping: true,
    address: 'Buenos Aires'
  },
  {
    id: 'MLA897805299',
    title: 'Bc Rich Kerry King Kkv Warlock Floyd Rose Envio Tarjeta Gtia',
    price: {
      currency: 'ARS',
      amount: 59498,
      decimals: 0.8099999999976717
    },
    picture: 'http://http2.mlstatic.com/D_639106-MLA44115984610_112020-O.jpg',
    condition: 'used',
    free_shipping: false,
    address: 'Buenos Aires'
  },
  {
    id: 'MLA695975427',
    title: 'Guitarra Bc Rich Mk-3 Warlock',
    price: {
      currency: 'ARS',
      amount: 65203,
      decimals: 0.7799999999988358
    },
    picture: 'http://http2.mlstatic.com/D_705665-MLA42155606909_062020-O.jpg',
    condition: 'new',
    free_shipping: true,
    address: 'Buenos Aires'
  },
  {
    id: 'MLA688232389',
    title: 'Guitarra Eléctrica Warlock B.c. Rich Mk1-wl-bwbk Guitarra Eléctrica Warlock B.c. Rich Mk1-wl-bwbk Guitarra Eléctrica Warlock B.c. Rich Mk1-wl-bwbk ',
    price: {
      currency: 'ARS',
      amount: 42397,
      decimals: 0
    },
    picture: 'http://http2.mlstatic.com/D_628243-MLA41328209420_042020-O.jpg',
    condition: 'new',
    free_shipping: true,
    address: 'Capital Federal'
  },
  {
    id: 'MLA760170780',
    title: 'Guitarra Eléctrica Mockingbird B.c. Rich Mk9-mb-wnb W/case',
    price: {
      currency: 'ARS',
      amount: 136044,
      decimals: 0
    },
    picture: 'http://http2.mlstatic.com/D_743968-MLA41328188656_042020-O.jpg',
    condition: 'new',
    free_shipping: true,
    address: 'Capital Federal'
  }
]

const Products = () => {
  return (
    <div className='products'>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
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
