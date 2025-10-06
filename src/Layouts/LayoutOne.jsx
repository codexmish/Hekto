import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default LayoutOne