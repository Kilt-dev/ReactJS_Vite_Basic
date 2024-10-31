import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'



function App() {
  
  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
