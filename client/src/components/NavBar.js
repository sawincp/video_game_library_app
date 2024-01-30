import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <NavLink to='/'>Profile |</NavLink>
        <NavLink to ='/games' >Game Library|</NavLink>
        <NavLink to='/consoles'> Consoles| </NavLink>
        <NavLink to='/genres'> Genres</NavLink>
    </div>
  )
}

export default NavBar