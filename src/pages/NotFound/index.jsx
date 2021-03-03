import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './styles.scss'

const NotFound = () => {
  const location = useLocation()

  return (
    <div className='not-found'>
      <Helmet>
        <title>Mercado Libre - by: juancaricodev</title>
        <meta name='description' content='La comunidad de compra y venta online más grande de América Latina.' />
      </Helmet>

      <h1 className='not-found__title'>404: P&aacute;gina no encontrada</h1>
      <h2 className='not-found__no-match'>
        No hay rutas que coincidan con: <code>{location.pathname}</code>
      </h2>
      <h3 className='not-found__subtitle'>
        Regresa a la{' '}
        <Link className='link' to='/'>
          P&aacute;gina Principal
        </Link>
        {' '}
        o realiza alguna b&uacute;squeda
      </h3>
    </div>
  )
}

export default NotFound
