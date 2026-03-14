import React from 'react'

function User() {
  return (
    <div>
      {users.map(user => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
    </div>
  )
}

export default User
