import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className='bg-white shadow-xl p-3'>
        <div className='container mx-auto flex justify-between items-center'>
            <div className='text-lg font-bold'>My Web Development Study</div>
            <ul className='flex space-x-20'>
                <li>
                    <Link to='/category' className='text-black hover:text-gray-400'>
                        Category
                    </Link>
                </li>
                <li>
                    <Link to='/signup' className='text-black hover:text-gray-400'>
                        Sign Up
                    </Link>
                </li>
                <li>
                    <Link to='/login' className='text-black hover:text-gray-400'>
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar