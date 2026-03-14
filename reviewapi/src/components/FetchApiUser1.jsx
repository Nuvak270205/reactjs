import React, {useState, useEffect, use, Suspense, } from 'react'

const fetchapi = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .catch(error => new Error('Failed to fetch users'))

function FetchApiUser() {
  
    const users = use(fetchapi);


  return (
    <div>
      <h1>Fetched Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
          {error ? <div>Error fetching users</div> : (
            users.map(user => (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          )))}
      </Suspense>
    </div>
  )
}

export default FetchApiUser

