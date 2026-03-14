import React, {useState, useEffect, use} from 'react'

function FetchApiUser() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchapi = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }

        fetchapi();
    }, [])
  return (
    <div>
      <h1>Fetched Users</h1>
      <ul>
        {users.map(user => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default FetchApiUser

