import React from 'react'
// import Navbar from './components/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { Register } from './pages/Register'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='' element={<MainLayout/>} >
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  
 
  </>
    
  )
}

export default App