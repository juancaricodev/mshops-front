import React from 'react'

import './styles.scss'

/**
 * NoMatch
 * Component rendered from Products page when the query doesn't match any result from API
 */
const NoMatch = () => {
  return (
    <div className='no-match'>
      <h2>No hay publicaciones que coincidan con tu b&uacute;squeda.</h2>
      <ul>
        <li><strong>Revisa la ortograf&iacute;a</strong> de la palabra.</li>
        <li>Utiliza <strong>palabras m&aacute;s gen&eacute;ricas</strong> o menos palabras.</li>
      </ul>
    </div>
  )
}

export default NoMatch
