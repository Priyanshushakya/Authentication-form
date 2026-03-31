import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='max-w-7xl bg-black text-white py-1 border-b' >
        <div className='flex items-center justify-between px-9' >
            <h3 className='text-2xl font-semibold'>Authentication</h3>
            <div className='flex items-center text-2xl font-semibold justify-center gap-5'>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </div>

    </nav>
    // <div>Navbar</div>
  )
}

export default Navbar