import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <NavLink to='/'>Profile |</NavLink>
        <NavLink to='/consoles'> Consoles| </NavLink>
        <NavLink to ='/games' >Games Library</NavLink>
    </div>
  )
}

export default NavBar