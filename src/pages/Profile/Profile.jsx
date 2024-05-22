import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Profile = ({authUser}) => {
    const {state} = useLocation();

    //// hle shuta xosale
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