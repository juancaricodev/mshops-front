import React, { useState, useEffect } from 'react'

import { Link, useHistory } from 'react-router-dom'

import './styles.scss'
import Logo from '@img/Logo_ML.png'
import Search from '@img/ic_Search.png'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const history = useHistory()

  const searchQuery = new URLSearchParams(history.location.search).get('search')

  useEffect(() => {
    setSearch(searchQuery)

    return () => setSearch('')
  }, [history.location.search])

  const handleSubmit = (e) => {
    e.preventDefault()

    search.length > 0 && history.push(`/items?search=${search}`)
    // setSearch('')
    console.log(history.location)
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
