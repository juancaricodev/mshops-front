import React from 'react'

import SearchBar from './components/SearchBar'
// import Breadcrumb from '@utils/components/Breadcrumb'

const Layout = ({ children }) => {
  return (
    <>
      <SearchBar />
      {/* <Breadcrumb /> */}
      <div className='page-container'>
        {children}
      </div>
    </>
  )
}

export default Layout
