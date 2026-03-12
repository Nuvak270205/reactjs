import React, {useState, useEffect} from 'react'

function FetchApiEx1() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    }, []);
  return (
    <div>
       {users.map(user => {
            return (
            <div key={user.id}>
            <p>{"Name: " + user.name}</p>
            <p>{"Email: " + user.email}</p>
            </div>
            )
        })}
    </div>
  )
}

export default FetchApiEx1
