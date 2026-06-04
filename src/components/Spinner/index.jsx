import React from 'react'

import './styles.scss'

/**
 * Utility component for being rendered from any page or component with loading state
 */
const Spinner = () => {
  return (
    <div className='spinner-container'>
      <div className='spinner' />
    </div>
  )
}

export default Spinner
