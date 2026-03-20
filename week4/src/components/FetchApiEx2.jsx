import React, {useState, useEffect} from 'react'

function FetchApiEx2() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () =>{
          try {
            const response  = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            setError(error.message);
          }finally{
            setLoading(false);
          }
        }
        setTimeout(() => {
          fetchData();
        }, 1000);
    }, []);
  return (
    <div>
       {loading ? (
        <p>Loading...</p>
       ) : error ? (
        <p style={{color: 'red'}}>{error}</p>
       ) : (
        <div>
          {users.map(user => (
            <div key={user.id}>
              <p>{"Name: " + user.name}</p>
              <p>{"Email: " + user.email}</p>
            </div>
          ))}
        </div>
       )}
    </div>
  )
}

export default FetchApiEx2
