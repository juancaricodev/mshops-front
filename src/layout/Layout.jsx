import React from 'react'

import SearchBar from './components/SearchBar'

/**
 * Layout
 * Rendets SearchBar component and encloses the pages and components to be rendered
 * @param {props.children} - pages and components rendered
 */
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
