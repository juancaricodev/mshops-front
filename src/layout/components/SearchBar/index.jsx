import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import './styles.scss'
import Logo from '@img/Logo_ML.png'
import Search from '@img/ic_Search.png'
import productsService from '@services/products'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    query.length > 0 &&
    productsService
      .getAll(query)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Searching...', search)
    setQuery(search)
  }

  const searchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='searchbar'>
      <div className='searchbar-container'>
        <Link to='/' className='searchbar__logo'>
          <img src={Logo} alt='Mercado Libre logo' />
        </Link>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Nunca dejes de buscar'
            onChange={searchChange}
            value={search}
          />

          <button type='submit'>
            <img src={Search} alt='search icon' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
