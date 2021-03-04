import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import capitalizeString from '@utils/functions/capitalizeString'
import Divider from '@svgComponents/Divider'
import './styles.scss'

/**
 * Breadcrumb
 *
 * Generates a breadcrumb from an array of categories
 * Every category of the breadcrumb is linked to the Products page, passing its name as search param.
 * @param {Array} categories - Array of categories to be mapped into a breadcrumb
 */
const Breadcrumb = ({ categories }) => {
  const [categoryList, setCategoryList] = useState()

  // Side effect executed whten categories param. is received
  // sets categoryList to be mapped for creating the breadcrumb
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
                {capitalizeString(category)}
              </Link>
            </li>
          )).reduce((prev, curr) => [prev, <Divider key />, curr])
        }
      </ul>
    </div>
  )
}

export default Breadcrumb
