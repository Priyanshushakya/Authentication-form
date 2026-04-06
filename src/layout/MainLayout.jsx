import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div className='bg-black min-h-screen'>
        <Navbar/>
        <Outlet/>
        <Toaster />
    </div>
  )
}

export default MainLayout