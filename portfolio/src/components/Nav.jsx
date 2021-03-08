import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return(
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/project">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>

  )
}

export default Nav