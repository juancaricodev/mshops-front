import React, { useState, useEffect } from 'react'

import './styles.scss'

const Breadcrumb = ({ categories }) => {
  const [categoryList, setCategoryList] = useState()

  useEffect(() => {
    setCategoryList(categories)
  })

  return (
    <div className='breadcrumb'>
      <ul>
        {
          categoryList?.map((category, index) => (
            <li key={index}>
              {category}
            </li>
          )).reduce((prev, curr) => [prev, '>', curr])
        }
      </ul>
    </div>
  )
}

export default Breadcrumb
