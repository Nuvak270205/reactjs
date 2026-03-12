import React, {useState, useEffect} from 'react'

function FetchApiEx4() {
    const [posts, setPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        const fetchData = async () =>{
          try {
            const response  = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
            
          } catch (error) {
            setError(error.message);
          }
        }
        fetchData();
    }, []);
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
      <h3>Danh sach post</h3>
      {posts.filter(post => post.title.includes(searchValue)).map(post => {
            return (
            <div key={post.id}>
            <p>{"Title: " + post.title}</p>
            <p>{"Body: " + post.body}</p>
            </div>
            )
        })} 
    </div>
  )
}

export default FetchApiEx4
