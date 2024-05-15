import React from 'react'
import'./Header.css'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div>
            <h3>Mobile shop</h3>
        </div>
        <nav>
            <NavLink  to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
        </nav>
        <div>
            icons 
        </div>
    </header>
  )
}

export default Header