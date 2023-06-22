// import React from 'react'
import NavigationBar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import TopNavigation from '../../components/TopNavbar'

function HomeSharedLayout() {
  return (
    <>
    <TopNavigation />
    <NavigationBar />
    <Outlet />
    </>
  )
}

export default HomeSharedLayout