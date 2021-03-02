import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Divider from '@svgComponents/Divider'
import './styles.scss'

const Breadcrumb = ({ categories }) => {
  const [categoryList, setCategoryList] = useState()

  useEffect(() => {
    setCategoryList(categories)
  }, [categories])

  return (
    <div className='breadcrumb'>
      <ul>
        {
          categoryList?.map((category, index) => (
            <li key={index}>
              <Link to={`/items?search=${category}`}>
                {category}
              </Link>
            </li>
          )).reduce((prev, curr) => [prev, <Divider key />, curr])
        }
      </ul>
    </div>
  )
}

export default Breadcrumb
