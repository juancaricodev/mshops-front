import React, { useState, useEffect } from 'react'

import { Link, useHistory, useLocation } from 'react-router-dom'

import './styles.scss'
import Logo from '@img/Logo_ML.png'
import Search from '@img/ic_Search.png'

/**
 * SearchBar
 *
 * Handles the url state by getting its search parameters and changing them according to the case
 */
const SearchBar = () => {
  // State handled by input field
  const [search, setSearch] = useState('')

  // { useLocation, useHistory } -> react-router-dom hooks for interacting with the url state
  const history = useHistory()
  const location = useLocation()

  // using URLSearchParams for getting the 'search' param. of the url
  const searchQuery = new URLSearchParams(location.search).get('search')

  // Side effect wathing on location.search (in url)
  useEffect(() => {
    // When accessing to Products through url, sets the search field (input) as the search param. in the url
    location.pathname === '/items' && setSearch(searchQuery)
    // When accessing to ProductDetail, cleans up the search field (input)
    location.pathname.includes('/items/') && setSearch('')

    return () => setSearch('')
  }, [location.search])

  // onSumbit pushes the search string to the url as a query param.
  const handleSubmit = (e) => {
    e.preventDefault()

    search.length > 0 && history.push(`/items?search=${search}`)
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
