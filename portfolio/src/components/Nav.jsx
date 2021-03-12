import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return(
    <div className="nav-bar">
      <nav className="nav-link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/project">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>

  )
}

export default Nav