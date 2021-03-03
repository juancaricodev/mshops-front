import React from 'react'

import { Helmet } from 'react-helmet'
import './styles.scss'

const Home = () => {
  return (
    <div className='home'>
      <Helmet>
        <title>Mercado Libre - by: juancaricodev</title>
        <meta name='description' content='La comunidad de compra y venta online más grande de América Latina.' />
      </Helmet>

      <p>
        ¡Bienvenidos a Mercado Libre!
      </p>
    </div>
  )
}

export default Home
