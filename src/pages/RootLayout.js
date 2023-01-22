import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export class RootLayout extends Component {

  render() {
    return (
      <>
        <Navbar />        
        <Outlet />
      </>
    )
  }
}

export default RootLayout