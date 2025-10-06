import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layouts/LayoutOne'
import Home from './pages/Home'

const App = () => {

  const myroute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Home/>}/>
    </Route>
  ))


  return (
    <div>
      <RouterProvider router={myroute}/>

    </div>
  )
}

export default App