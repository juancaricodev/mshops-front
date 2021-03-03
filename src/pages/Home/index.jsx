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

      <h1>
        ¡Bienvenidos a Mercado Libre!
      </h1>

      <h2>
        La comunidad de compra y venta online más grande de América Latina.
      </h2>
    </div>
  )
}

export default Home
