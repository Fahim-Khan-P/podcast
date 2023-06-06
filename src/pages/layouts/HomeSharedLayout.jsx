// import React from 'react'
import NavigationBar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

function HomeSharedLayout() {
  return (
    <>
    <NavigationBar />
    <Outlet />
    </>
  )
}

export default HomeSharedLayout