import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MyContext from '../../MyContext';

const Profile = () => {
  const { state } = useLocation();
  const { authUser } = useContext(MyContext)
  
  useEffect(() => {
    authUser(state)
  }, [])

  
  return (
    <div>
      <h1>Profile : {state?.name}</h1>
    </div>
  )
}

export default Profile