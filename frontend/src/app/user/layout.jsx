import React from 'react'
import UserNavbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <UserNavbar />
      {children}
    </div>
  )
}

export default Layout