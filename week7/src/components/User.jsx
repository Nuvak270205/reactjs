import React from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../recoil/atom/UserAtom';

function User() {
    const user = useRecoilValue(userAtom);
  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default User
