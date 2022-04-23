import React from 'react'
import Header from './header'
import Sidebar from './sidebar/sidebar'

const Layout = ({children}) => {
  return (
    <div className="layout">
            <Sidebar />
            <div className="page-section my-3">
              <Header />
              {children}
            </div>
          </div>
  )
}

export default Layout