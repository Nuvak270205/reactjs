import React, {useState, useEffect} from 'react'

function FetchApiEx3() {
    const [user, setUser] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(false);   

    useEffect(() => {
        const fetchData = async () =>{
          try {
            const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${searchValue}`);
            const data = await response.json();
            setUser(data);
            setError(false);    
          } catch (error) {
            setError(true);
          }
        }
        if(searchValue) {
          if(!isNaN(searchValue) && parseInt(searchValue) > 0 && parseInt(searchValue) <= 10) {
            fetchData();
          }else{
            setUser(null);
            setError(true);
          }
        } else {
            setUser(null);
            setError(false);
        }
    }, [searchValue]);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
      </div>
      {error ? (
        <p style={{color: 'red'}}>User not found</p>
      ) : (
        user && (
          <div>
            <p>{"Name: " + user.name}</p>
            <p>{"Phone: " + user.phone}</p>
            <p>{"Website: " + user.website}</p>
          </div>
        )
      )}
    </div>
  )
}

export default FetchApiEx3
