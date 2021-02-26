import React from 'react'

import './styles.scss'
import Logo from '../../../assets/img/Logo_ML.png'
import Search from '../../../assets/img/ic_Search.png'

const SearchBar = () => {
  return (
    <div className='searchbar'>
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
  )
}

export default SearchBar
