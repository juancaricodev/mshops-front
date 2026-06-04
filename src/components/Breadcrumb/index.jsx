import React from 'react'

import { Link } from 'react-router-dom'

import capitalizeString from '@utils/functions/capitalizeString'
import Divider from '@svgComponents/Divider'
import './styles.scss'

const Breadcrumb = ({ categories = [] }) => {
  if (!categories.length) {
    return null
  }

  return (
    <div className='breadcrumb'>
      <ul>
        {categories.map((category, index) => (
          <li key={`${category}-${index}`}>
            <Link to={`/items?search=${encodeURIComponent(category)}`}>
              {capitalizeString(category)}
            </Link>
            {index < categories.length - 1 && <Divider />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumb
