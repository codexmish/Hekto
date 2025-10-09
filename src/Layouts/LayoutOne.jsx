import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import ResNav from '../Components/ResNav'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <ResNav/>
    <Outlet/>
    
    </>
  )
}

export default LayoutOne