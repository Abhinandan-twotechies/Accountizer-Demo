import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Pagination from './components/UI/Pagination'


function Layout() {
    return (
        <>
            <div className='max-w-[95%] h-auto mx-auto'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
export default Layout