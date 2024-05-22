import React, { useState } from 'react'
import'./Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaOpencart } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa6";

const Header = ({cart, users, user}) => {
  
  console.log(user);
  const navigate = useNavigate()

  // if(user) {
  //  return navigate('/profile')
  // }else {
  //   return navigate('/login')
  // }


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