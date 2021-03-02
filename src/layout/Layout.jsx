import React from 'react'

import SearchBar from './components/SearchBar'

const Layout = ({ children }) => {
  return (
    <>
      <SearchBar />
      <div className='page-container'>
        {children}
      </div>
    </>
  )
}

export default Layout
