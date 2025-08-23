import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className=' flex justify-between items-center p-2 max-w-full mx-auto border-2 border-red-500 h-15'>
            <div className='flex gap-4 items-center  h-20 p-1'>
                <img className='w-45 h-15' src="https://accountizer.ca/static/media/logo_blue.e178a71682a9ea6991fae2e6b29b8352.svg" alt="" />
                <img className='w-15 h-12' src="https://accountizer.ca/static/media/built-in-canada.cacb3a786dfb847560d6d2b4351b64e7.svg" alt="" />
            </div>
            <div className='flex gap-6 font-semibold  p-1'>
                <Link to="/home">
                    Home
                </Link>
                <Link to="/">
                    Find Expert
                </Link>
                <Link to='/about'>
                    About us
                </Link>
                <Link to='/blogs'>
                    Blogs
                </Link>
                <Link to='/faq'>
                    FAQ's
                </Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/bookdemo' className='border-2 border-blue px-2'>
                    Book a Demo
                </Link>
            </div>
            <div className='flex gap-4 items-center'>
                <p>Client login</p>
                <button className='bg-blue text-white px-2 py-1 rounded-md'>Become an expert</button>
            </div>
        </header>
    )
}

export default Header;