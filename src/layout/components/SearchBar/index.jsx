import React from 'react'

import './styles.scss'
import Logo from '@img/Logo_ML.png'
import Search from '@img/ic_Search.png'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <div className='searchbar-container'>
        <div className='searchbar__logo'>
          <img src={Logo} alt='Mercado Libre logo' />
        </div>
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
