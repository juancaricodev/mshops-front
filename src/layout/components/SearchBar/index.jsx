import React, { useState, useEffect } from 'react'

import { Link, useHistory, useLocation } from 'react-router-dom'

import useQueryParam from '../../../hooks/useQueryParam'
import './styles.scss'
import Logo from '@img/Logo_ML.png'
import Search from '@img/ic_Search.png'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const history = useHistory()
  const location = useLocation()
  const searchQuery = useQueryParam('search') || ''

  useEffect(() => {
    if (location.pathname === '/items') {
      setSearch(searchQuery)
      return
    }

    if (location.pathname.startsWith('/items/')) {
      setSearch('')
      return
    }

    setSearch('')
  }, [location.pathname, searchQuery])

  const handleSubmit = (e) => {
    e.preventDefault()

    const trimmedSearch = search.trim()
    if (trimmedSearch.length > 0) {
      history.push(`/items?search=${encodeURIComponent(trimmedSearch)}`)
    }
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
