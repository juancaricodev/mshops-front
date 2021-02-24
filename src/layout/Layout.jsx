import React from 'react'

import SearchBar from './components/SearchBar'

const Layout = ({ children }) => {
  return (
    <>
      <SearchBar />
      {children}
    </>
  )
}

export default Layout
