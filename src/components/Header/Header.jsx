import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaOpencart } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa6";

import'./Header.css'
import MyContext from '../../MyContext';

const Header = () => {
  
  const {cart, users, user} = useContext(MyContext)


  return (
    <header>
        <div>
            <h3>Mobile shop</h3>
        </div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
        </nav>
        <div>
          <div className='carts'>
            <NavLink to='/carts'>
              <FaOpencart />
            </NavLink>
            <NavLink to={user ? '/profile' : '/login'}>
              <FaUserSecret />
            </NavLink>
          </div>
        </div>
    </header>
  )
}

export default Header