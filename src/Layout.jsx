import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
    return (
        <>
            <div className='max-w-[95%] h-auto mx-auto border-2'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
export default Layout