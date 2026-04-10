import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'

function Signin() {
    const {user, setUser} = useContext(UserContext);
    console.log(user, setUser)
  return (
    <div>
      <button onClick={() => setUser(true)}>Login</button>
    </div>
  )
}

export default Signin
