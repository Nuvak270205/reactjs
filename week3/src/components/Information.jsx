import React, { useState } from 'react'

function Information() {
    const [info, setInfo] = useState({
        name: '',
        email: "",
        age: ""
    })
  return (
    <div>
        <h1>Information</h1>
        <input type="text" placeholder='name' value={info.name} onChange={e => setInfo({...info, name: e.target.value})} />
        <input type="email" placeholder='email' value={info.email} onChange={e => setInfo({...info, email: e.target.value})} />
        <input type="number" placeholder='age' value={info.age} onChange={e => setInfo({...info, age: e.target.value})} />
    </div>
  )
}

export default Information
