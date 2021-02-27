import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import './styles.scss'

const NotFound = () => {
  const location = useLocation()

  return (
    <div className='not-found'>
      <div className='not-found__title'>404: P&aacute;gina no encontrada</div>
      <div className='not-found__no-match'>
        No hay rutas que coincidan con: <code>{location.pathname}</code>
      </div>
      <div className='not-found__subtitle'>
        Intenta llendo a la{' '}
        <Link className='link' to='/'>
          Página Principal
        </Link>
      </div>
    </div>
  )
}

export default NotFound
