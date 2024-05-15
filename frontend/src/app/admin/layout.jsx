import React from 'react'
import AdminNavbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <div className="grid grid-rows-2 grid-flow-col gap-2">
                <div className="row-span-1">

                    <AdminNavbar />
                </div>
                <div className='col-soan-1 mt-5 '></div>
                {children}
            </div>
        </>
    )
}

export default Layout