import React from 'react'

import { Link } from 'react-router-dom'

import './styles.scss'
import Logo from '@img/Logo_ML.png'
import Search from '@img/ic_Search.png'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <div className='searchbar-container'>
        <Link to='/' className='searchbar__logo'>
          <img src={Logo} alt='Mercado Libre logo' />
        </Link>
        <form>
          <input type='text' placeholder='Nunca dejes de buscar' />
          <button type='submit'>
            <img src={Search} alt='search icon' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
